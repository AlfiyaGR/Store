using Microsoft.AspNetCore.Mvc;

namespace LanguageStore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LanguageListController : ControllerBase
    {
        private static readonly string[] Complexities = new[]
        {
            "Easy", "Medium", "Master"
        };

        private static readonly string[] Names = new[]
        {
            "Russian", "English", "Korean", "Chineese", "French", "German",
        };

        private readonly ILogger<LanguageListController> _logger;

        public LanguageListController(ILogger<LanguageListController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetLanguageList")]
        public IEnumerable<Language> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Language
            {
                Name = Names[Random.Shared.Next(Names.Length)],
                Complexity = Complexities[Random.Shared.Next(Complexities.Length)]
            })
            .ToArray();
        }
    }
}
