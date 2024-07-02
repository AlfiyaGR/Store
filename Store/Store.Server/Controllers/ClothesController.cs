using Microsoft.AspNetCore.Mvc;

namespace Store.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ClothesController : ControllerBase
    {
        private static readonly string[] Names = new[]
        {
            "Dress", "Skirt", "Shirt", "Pants", "Jacket", "T-shirt",
        };

        private static readonly string[] Sizes = new[]
        {
            "XS", "S", "M", "L", "XL",
        };

        private readonly ILogger<ClothesController> _logger;

        public ClothesController(ILogger<ClothesController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetClothes")]
        public IEnumerable<Clothes> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Clothes
            {
                Name = Names[Random.Shared.Next(Names.Length)],
                Price = Random.Shared.Next(100, 5000),
                Size = Sizes[Random.Shared.Next(Sizes.Length)]
            })
            .ToArray();
        }
    }
}
