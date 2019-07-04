using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError( this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error",message);
            response.Headers.Add("Access-Control-Expose-Header","Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");

        }
   

        public static int CalculateAge(this DateTime datetime)
        {
            var age = DateTime.Today.Year- datetime.Year;
            if(datetime.AddYears(age) > DateTime.Today)
            age --;
            return age;

        }
    }
}