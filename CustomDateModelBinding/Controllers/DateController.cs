using Microsoft.AspNetCore.Mvc;
using System;

namespace CustomDateModelBinding.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class DateController : ControllerBase
    {
        [HttpGet("{date}")]
        public string Get([FromRoute] DateTime date)
        {
            Console.WriteLine($"The date passed is {date}");
            return "Date parameter processed successfully";
        }
    }
}
