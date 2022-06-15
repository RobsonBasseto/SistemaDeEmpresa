using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace SistemaDeEmpresa.Models
{
	[Table("filial", Schema = "public")]
	public class DbFilial
    {
		[Key]
		public long idfilial { get; set; }
		public string descricao { get; set; }
		public string sigla { get; set; }
		public string cnpj { get; set; }
		public string inscricaoestadual { get; set; }
		public string endereco { get; set; }
		public string telefone { get; set; }
		public string email { get; set; }
		public int idempresa { get; set; }
		
	}
}
