using Microsoft.AspNetCore.Mvc;

namespace StockApi.Controllers;

[ApiController]
[Route("[controller]")]
public class StockController : ControllerBase
{
    [HttpGet("{ticker}")]
    public IActionResult GetStock(string ticker)
    {
        var price = new Random().Next(100, 200);
        return Ok(new { ticker, price, time = DateTime.UtcNow });
    }
}