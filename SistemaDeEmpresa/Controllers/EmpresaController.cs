using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaDeEmpresa.Models;

namespace SistemaDeEmpresa.Controllers
{
    public class EmpresaController : Controller
    {
        private readonly Context _context;

        public EmpresaController(Context context) 
        { 
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View();
        }
    }
}
