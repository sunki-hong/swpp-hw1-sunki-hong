from crawler import JsonCrawler


class WeatherForecast:
    # TODO: implement
    def __init__(self, location_list, noti_list):
        self.location_list = location_list
        self.noti_list = noti_list

    def run(self):
        for location in self.location_list:
            woeid = JsonCrawler('https://www.metaweather.com/api/location/search/?query=%s' % location,
                            location).get_data()[0]["woeid"]
            weather = JsonCrawler('https://www.metaweather.com/api/location/%i' %woeid, location).get_data()['consolidated_weather'][0]
            for msg,condition in self.noti_list:
                if condition(weather):
                    print(msg + ' in ' + location)
    pass


if __name__ == '__main__':
    forecast = WeatherForecast(['seoul', 'new york'], [
        # TODO: set two conditions:
        ('Light cloud', lambda x: x["weather_state_name"] == "Light Cloud"),
        ('Ice age', lambda x: x["min_temp"] < -30 )
    ])
    forecast.run()
