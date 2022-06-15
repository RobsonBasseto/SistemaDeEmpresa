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

        public IActionResult Index()
        {
            var listaEmpresas = _context.empresa.ToList();
            return View(listaEmpresas);
        }
       
        [HttpPost]
        public IActionResult Create(DbEmpresa e)
        {
            _context.empresa.Add(e);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
       
    }
}
