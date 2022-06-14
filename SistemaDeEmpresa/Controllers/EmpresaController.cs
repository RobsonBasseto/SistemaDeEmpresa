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
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Index([Bind("idempresa, nomefantasia, datafundacao, razaosocial, grupoempresarial,funcionarios,faturamento,capitalsocial,inscricaoestadual,cnpj,endereco,descricao,email,telefone")]DbEmpresa empresa)
        {
            if (ModelState.IsValid)
            {
                _context.Add(empresa);
                return RedirectToAction(nameof(Index));
            }
            return View(empresa);
        } 
    }
}
