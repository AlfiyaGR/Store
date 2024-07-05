using Microsoft.AspNetCore.Mvc;
using System.Numerics;

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

        static readonly List<Clothes> clothesList;
        static ClothesController()
        {
            clothesList = new List<Clothes>
            {
                new Clothes { 
                    Id = 1,
                    Name = "Dress",
                    Price = 2000,
                    Size = "S"                
                },
                new Clothes {
                    Id = 2,
                    Name = "T-shirt",
                    Price = 2400,
                    Size = "M"
                },
                new Clothes {
                    Id = 3,
                    Name = Names[Random.Shared.Next(Names.Length)],
                    Price = Random.Shared.Next(100, 5000),
                    Size = Sizes[Random.Shared.Next(Sizes.Length)]
                },
            };
        }

        private readonly ILogger<ClothesController> _logger;

        public ClothesController(ILogger<ClothesController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetClothes")]
        public IEnumerable<Clothes> Get()
        {
            return clothesList;

            //return Enumerable.Range(1, 5).Select(index => new Clothes
            //{
            //    Name = Names[Random.Shared.Next(Names.Length)],
            //    Price = Random.Shared.Next(100, 5000),
            //    Size = Sizes[Random.Shared.Next(Sizes.Length)]
            //})
            //.ToArray();
        }

        [HttpPost(Name = "PostClothes")]
        public IActionResult Post(Clothes item)
        {
            clothesList.Add(item);
            return Ok(item);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Clothes? item = clothesList.FirstOrDefault(x => x.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            clothesList.Remove(item);
            return Ok(item);
        }

        [HttpGet("{id}")]
        public Clothes? Edit(int id)
        {
            Clothes item = clothesList.FirstOrDefault(x => x.Id == id);
            //clothesList.Add(item);
            //return Ok(item);
            return item;
        }
    }
}
