namespace SistemaDeEmpresa.Models
{
    public class DbEmpresa
    {
		public int idempresa { get; set; }
		public string nomefantasia { get; set; }
		public DateOnly datafundacao { get; set; }
		public string razaosocial { get; set; }
		public string grupoempresarial { get; set; }
		public int funcionarios { get; set; }
		public decimal faturamento { get; set; }
		public string capitalsocial { get; set; }
		public string inscricaoestadual { get; set; }
		public string cnpj { get; set; }
		public string endereco { get; set; }
		public string descricao { get; set; }
		public string email { get; set; }
		public string telefone { get; set; }
		public DbEmpresa() { }
	}
}
