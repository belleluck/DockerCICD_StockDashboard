using Xunit;
using StockApi.Controllers;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace StockApi.Tests;

public class StockControllerTests
{
    [Fact]
    public void GetStock_ReturnsOkResult()
    {
       // Arrange
        var controller = new StockController();

        // Act
        var result = controller.GetStock("AAPL");

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);

        // 把返回的匿名对象转成 JSON 再解析
        var json = JsonSerializer.Serialize(okResult.Value);
        using var doc = JsonDocument.Parse(json);
        var root = doc.RootElement;

        Assert.Equal("AAPL", root.GetProperty("ticker").GetString());
        Assert.InRange(root.GetProperty("price").GetInt32(), 100, 200);
    }
}
