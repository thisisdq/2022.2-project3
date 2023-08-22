#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include <DHT.h>

const char *ssid = "DanhQuyWiFi";  // Nha 42 5Ghz - DanhQuyWiFi
const char *password = "12345678"; // 0942864875 - 12345678

#define DHTPIN D2
#define DHTTYPE DHT11
#define ledPin D0
#define infraredPin D3

DHT dht(DHTPIN, DHTTYPE);

float previousTemperature = -1; // Initialize Temperature
float previousHumidity = -1;    // Initialize Humidity
int previousInfrared = -1;      // Initialize Infrared

WiFiClient client;
void setup()
{
    Serial.begin(115200);
    dht.begin();

    pinMode(ledPin, OUTPUT);
    pinMode(infraredPin, INPUT);
    digitalWrite(ledPin, LOW);

    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    Serial.println("Connected to WiFi");
}

void sendTemperature(float temperature)
{
    HTTPClient http;

    String url = "http://192.168.0.101:5000/update/temperature";
    http.begin(client, url);

    http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    String postData = "temperature=" + String(temperature);

    int httpResponseCode = http.POST(postData);
    if (httpResponseCode > 0)
    {
        Serial.print("HTTP Response code (Temperature): ");
        Serial.println(httpResponseCode);
    }
    else
    {
        Serial.print("Error sending POST request (Temperature): ");
        Serial.println(httpResponseCode);
    }

    http.end();
}

void sendHumidity(float humidity)
{
    HTTPClient http;

    String url = "http://192.168.0.101:5000/update/humidity";
    http.begin(client, url);

    http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    String postData = "humidity=" + String(humidity);

    int httpResponseCode = http.POST(postData);
    if (httpResponseCode > 0)
    {
        Serial.print("HTTP Response code (Humidity): ");
        Serial.println(httpResponseCode);
    }
    else
    {
        Serial.print("Error sending POST request (Humidity): ");
        Serial.println(httpResponseCode);
    }

    http.end();
}

void sendInfrared(String infrared)
{
    HTTPClient http;

    String url = "http://192.168.0.101:5000/update/infrared";
    http.begin(client, url);

    http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    String postData = "infrared=" + String(infrared);

    int httpResponseCode = http.POST(postData);
    if (httpResponseCode > 0)
    {
        Serial.print("HTTP Response code (Infrared): ");
        Serial.println(httpResponseCode);
    }
    else
    {
        Serial.print("Error sending POST request (Iumidity): ");
        Serial.println(httpResponseCode);
    }

    http.end();
}

float readTemperature()
{
    float temperature = dht.readTemperature();

    Serial.print("temperature :");
    Serial.println(temperature);
    return temperature;
}

float readHumidity()
{
    float humidity = dht.readHumidity();
    Serial.print("humidity :");
    Serial.println(humidity);
    return humidity;
}
void toggleLED()
{
    digitalWrite(ledPin, !digitalRead(ledPin)); // Toggle LED state
}

void updateLEDStatus()
{
    if (WiFi.status() == WL_CONNECTED)
    {
        HTTPClient http;
        String url = "http://192.168.0.101:5000/getLEDStatus";
        http.begin(client, url);

        int httpResponseCode = http.GET();
        if (httpResponseCode == HTTP_CODE_OK)
        {
            String response = http.getString();

            // Parse JSON response
            DynamicJsonDocument jsonBuffer(512);
            deserializeJson(jsonBuffer, response);

            const char *ledStatus = jsonBuffer["ledStatus"];
            if (ledStatus)
            {
                if (strcmp(ledStatus, "ON") == 0)
                {
                    digitalWrite(ledPin, HIGH);
                }
                else if (strcmp(ledStatus, "OFF") == 0)
                {
                    digitalWrite(ledPin, LOW);
                }
            }
        }
        http.end();
    }
}
void loop(){
    float temperature = readTemperature();
    float humidity = readHumidity();
    int inf = digitalRead(infraredPin);
    if (!isnan(temperature)){
        if (temperature != previousTemperature)
        {
            sendTemperature(temperature);
            previousTemperature = temperature;
        }
    }
    if (!isnan(humidity)){
        if (humidity != previousHumidity){
            sendHumidity(humidity);
            previousHumidity = humidity;
        }
    }
    if (!isnan(inf)){
        if (inf != previousInfrared){
            if (inf == 0){
                sendInfrared("true");
            }
            else{
                sendInfrared("false");
            }
            previousInfrared = inf;
        }
    }
    updateLEDStatus();
    delay(1000); // Check for sensor data and LED status every 1 seconds
}
