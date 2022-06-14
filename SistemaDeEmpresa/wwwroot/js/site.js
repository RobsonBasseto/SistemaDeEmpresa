var Empresas = null;
var Empresa = null;
var Filial = null;

function NewEmpresa() { 			//Declaração das variáveis da empresa.
	return {
		Codigo: null,
		NomeFantasia: '',
		DataFundacao: null,
		RazaoSocial: '',
		GrupoEmpresarial: null,
		Ativa: null,
		Cooperativa: null,
		Funcionarios: null,
		Faturamento: null,
		CapitalSocial: null,
		InscricaoEstadual: '',
		Cnpj: '',
		Cidade: '',
		Cep: '',
		Bairro: '',
		Endereco: '',
		Descricao: '',
		Email: '',
		Telefone: '',
		Filiais: []
	};
}

function NewFilial() {			//Declaração das variáveis da filial.
	return {
		CodigoFilial: null,
		DescricaoFilial: '',
		Sigla: '',
		CnpjFilial: '',
		InscricaoEstadualFilial: '',
		AtivaFilial: '',
		CidadeFilial: '',
		CepFilial: '',
		BairroFilial: '',
		Flag: null,
		EnderecoFilial: '',
		TelefoneFilial: '',
		EmailFilial: ''

	};
}

function validarEmpresa() { 		//Faz a verificação se os campos da empresa estão preenchidos.

	if ($("#ovTXT_codigo").val() === "") {
		$("#ovTXT_codigo").focus();
		return false;
	}

	if ($("#ovTXT_nomeFantasia").val() === "") {
		$("#ovTXT_nomeFantasia").focus();
		return false;
	}

	if ($("#ovDT_dataFundacao").val() === "") {
		$("#ovDT_dataFundacao").focus();
		return false;
	}

	if ($("#ovTXT_razaoSocial").val() === "") {
		$("#ovTXT_razaoSocial").focus();
		return false;
	}

	if ($("#ovTXT_grupoEmpresarial").val() === "") {
		$("#ovTXT_grupoEmpresarial").focus();
		return false;
	}

	if ($("#ovTXT_faturamento").val() === "") {
		$("#ovTXT_faturamento").focus();
		return false;
	}

	if ($("#ovTXT_capitalSocial").val() === "") {
		$("#ovTXT_capitalSocial").focus();
		return false;
	}

	if ($("#ovTXT_inscricaoEstadual").val() === "") {
		$("#ovTXT_inscricaoEstadual").focus();
		return false;
	}

	if ($("#ovTXT_cnpj").val() === "") {
		$("#ovTXT_cnpj").focus();
		return false;
	}

	if ($("#ovTXT_cidade").val() === "") {
		$("#ovTXT_cidade").focus();
		return false;
	}

	if ($("#ovTXT_cep").val() === "") {
		$("#ovTXT_cep").focus();
		return false;
	}

	if ($("#ovTXT_bairro").val() === "") {
		$("#ovTXT_bairro").focus();
		return false;
	}

	if ($("#ovTXT_endereco").val() === "") {
		$("#ovTXT_endereco").focus();
		return false;
	}

	if ($("#ovTXT_descricao").val() === "") {
		$("#ovTXT_descricao").focus();
		return false;
	}

	if ($("#ovTXT_email").val() === "") {
		$("#ovTXT_email").focus();
		return false;
	}

	if ($("#ovTXT_telefone").val() === "") {
		$("#ovTXT_telefone").focus();
		return false;
	}

	return true;
}

function validarFilial() {		//Faz a verificação se os campos da filial estão preenchidos.

	if ($("#ovTXT_codigoFilial").val() === "") {
		$("#ovTXT_codigoFilial").focus();
		return false;
	}

	if ($("#ovTXT_descricaoFilial").val() === "") {
		$("#ovTXT_descricaoFilial").focus();
		return false;
	}

	if ($("#ovTXT_siglaFilial").val() === "") {
		$("#ovTXT_siglaFilial").focus();
		return false;
	}

	if ($("#ovTXT_cnpjFilial").val() === "") {
		$("#ovTXT_cnpjFilial").focus();
		return false;
	}

	if ($("#ovTXT_incricaoEstadualFilial").val() === "") {
		$("#ovTXT_incricaoEstadualFilial").focus();
		return false;
	}

	if ($("#ovTXT_cidadeFilial").val() === "") {
		$("#ovTXT_cidadeFilial").focus();
		return false;
	}

	if ($("#ovTXT_CEPFilial").val() === "") {
		$("#ovTXT_CEPFilial").focus();
		return false;
	}

	if ($("#ovTXT_bairroFilial").val() === "") {
		$("#ovTXT_bairroFilial").focus();
		return false;
	}

	if ($("#ovTXT_enderecoFilial").val() === "") {
		$("#ovTXT_enderecoFilial").focus();
		return false;
	}

	if ($("#ovTXT_telefoneFilial").val() === "") {
		$("#ovTXT_telefoneFilial").focus();
		return false;
	}

	if ($("#ovTXT_emailFilial").val() === "") {
		$("#ovTXT_emailFilial").focus();
		return false;
	}

	return true;
}

function salvarEmpresa() { 		//Função que salva os dados dos campos digitados num array.

	if (!validarEmpresa()) //verifica os campos.
		return;

	Empresa.Codigo = $("#ovTXT_codigo").val();
	Empresa.NomeFantasia = $("#ovTXT_nomeFantasia").val();
	Empresa.DataFundacao = $("#ovDT_dataFundacao").val();
	Empresa.RazaoSocial = $("#ovTXT_razaoSocial").val();
	Empresa.GrupoEmpresarial = $("#ovTXT_grupoEmpresarial").val();
	Empresa.Ativa = $("#ovCB_ativa").val();
	Empresa.Cooperativa = $("#ovCB_cooperativa").val();
	Empresa.Funcionarios = $("#ovTXT_funcionarios").val();
	Empresa.Faturamento = $("#ovTXT_faturamento").val();
	Empresa.CapitalSocial = $("#ovTXT_capitalSocial").val();
	Empresa.InscricaoEstadual = $("#ovTXT_inscricaoEstadual").val();
	Empresa.Cnpj = $("#ovTXT_cnpj").val();
	Empresa.Cidade = $("#ovTXT_cidade").val();
	Empresa.Cep = $("#ovTXT_cep").val();
	Empresa.Bairro = $("#ovTXT_bairro").val();
	Empresa.Endereco = $("#ovTXT_endereco").val();
	Empresa.Descricao = $("#ovTXT_descricao").val();
	Empresa.Email = $("#ovTXT_email").val();
	Empresa.Telefone = $("#ovTXT_telefone").val();

	var empresaExiste = Empresas.filter(function (emp) { 	// Verifica se o codigo existe.
		return emp.Codigo == Empresa.Codigo;
	}).length > 0;

	if (empresaExiste)		//se existe emp recebe os dados de Empresa e não salva.
		Empresas.map(function (index, emp) {
			if (emp.Codigo == Empresa.Codigo)

			emp.NomeFantasia = Empresa.NomeFantasia;
			emp.DataFundacao = Empresa.DataFundacao;
			emp.RazaoSocial = Empresa.RazaoSocial;
			emp.GrupoEmpresarial = Empresa.GrupoEmpresarial;
			emp.Ativa = Empresa.Ativa;
			emp.Cooperativa = Empresa.Cooperativa;
			emp.Funcionarios = Empresa.Funcionarios;
			emp.Faturamento = Empresa.Faturamento;
			emp.CapitalSocial = Empresa.CapitalSocial;
			emp.InscricaoEstadual = Empresa.InscricaoEstadual;
			emp.Cnpj = Empresa.Cnpj;
			emp.Cidade = Empresa.Cidade;
			emp.Cep = Empresa.Cep;
			emp.Bairro = Empresa.Bairro;
			emp.Endereco = Empresa.Endereco;
			emp.Descricao = Empresa.Descricao;
			emp.Email = Empresa.Email;
			emp.Telefone = Empresa.Telefone;
		});
	else //caso contrario ele salva.
		Empresas.push(Empresa);

	$("#modal-Empresa").modal("hide");
	carregarEmpresas(); //atualiza a lista.
	carregarFiliais();
}

function salvarFilial() {		//Função que salva os dados de filial dentro do array filial da empresa.

	if (!validarFilial()) 		//verifica os campos.
		return;

	Filial.CodigoFilial = $("#ovTXT_codigoFilial").val();
	Filial.DescricaoFilial = $("#ovTXT_descricaoFilial").val();
	Filial.Sigla = $("#ovTXT_siglaFilial").val();
	Filial.CnpjFilial = $("#ovTXT_cnpjFilial").val();
	Filial.InscricaoEstadualFilial = $("#ovTXT_incricaoEstadualFilial").val();
	Filial.AtivaFilial = $("#ovTXT_ativaFilial").val();
	Filial.CidadeFilial = $("#ovTXT_cidadeFilial").val();
	Filial.CepFilial = $("#ovTXT_CEPFilial").val();
	Filial.BairroFilial = $("#ovTXT_bairroFilial").val();
	Filial.Flag = $("#ovTXT_flagFilial").val();
	Filial.EnderecoFilial = $("#ovTXT_enderecoFilial").val();
	Filial.TelefoneFilial = $("#ovTXT_telefoneFilial").val();
	Filial.EmailFilial = $("#ovTXT_emailFilial").val();

	var filialExiste = Empresa.Filiais.filter(function (fil) { // Verifica se o codigo existe.
		return fil.CodigoFilial == Filial.CodigoFilial;
	}).length > 0;

	if (filialExiste)		//se exite fil recebe os dados e não salva.
		Empresa.Filiais.map(function (index, fil) {
			if (fil.CodigoFilial == Empresa.Filiais.CodigoFilial)

				fil.CodigoFilial = Filial.CodigoFilial;
			fil.DescricaoFilial = Filial.DescricaoFilial;
			fil.Sigla = Filial.Sigla;
			fil.CnpjFilial = Filial.CnpjFilial;
			fil.InscricaoEstadualFilial = Filial.InscricaoEstadualFilial;
			fil.AtivaFilial = Filial.AtivaFilial;
			fil.CidadeFilial = Filial.CidadeFilial;
			fil.CepFilial = Filial.CepFilial;
			fil.BairroFilial = Filial.BairroFilial;
			fil.Flag = Filial.Flag;
			fil.EnderecoFilial = Filial.EnderecoFilial;
			fil.TelefoneFilial = Filial.TelefoneFilial;
			fil.EmailFilial = Filial.EmailFilial;
		});

	else
		Empresa.Filiais.push(Filial); //caso contrario salva.


	$("#modal-Filial").modal("hide");
	carregarFiliais(); //atualiza a lista
	carregarEmpresas();
}

function carregarEmpresas() {		//lista de dados das empresas.
	$("#ovTR_Dados tbody").html("");
	Empresas.map(function (emp, index) {
		let buttons = "<button type='button'" +
			"        class='btn btn-editar btn-xs btn-secondary'" +
			"        data-codigoempresa='" + emp.Codigo + "'" +
			"> <i class = \"fa fa-edit\"></i> Editar</button>" +
			"<button type='button'" +
			"        class='btn btn-remover btn-xs btn-danger'" +
			"        data-codigoempresa='" + emp.Codigo + "'" +
			"> <i class = \"fa fa-trash-alt\"></i> Remover</button>";
		let line = "<tr>" +
			"<td>" + emp.Codigo + "</td>" +
			"<td>" + emp.Descricao + "</td>" +
			"<td class=z=\"pull-right\">" + buttons + "</td>" +
			"</tr>";
		$("#ovTR_Dados tbody").append(line);
	});

	addEventEditar(); 	//função para editar.
	addEventRemover(); 	//função para remover.
}

function carregarFiliais() {		//lista de dados das filiais.
	$("#ovTR_DadosFiliais tbody").html("");
	Empresa.Filiais.map(function (fil, index) {
		let buttons = "<button type='button'" +
			"        class='btn btn-editarFilial btn-xs btn-secondary'" +
			"        data-codigofilial='" + fil.CodigoFilial + "'" +
			"> <i class = \"fa fa-edit\"></i> Editar</button>" +
			"<button type='button'" +
			"        class='btn btn-removerFilial btn-xs btn-danger'" +
			"        data-codigofilial='" + fil.CodigoFilial + "'" +
			"> <i class = \"fa fa-trash-alt\"></i> Remover</button>";
		let line = "<tr>" +
			"<td>" + fil.CodigoFilial + "</td>" +
			"<td>" + fil.CodigoFilial + "</td>" +
			"<td class=z=\"pull-right\">" + buttons + "</td>" +
			"</tr>";
		$("#ovTR_DadosFiliais tbody").append(line);
	});

	addEventEditarFilial();  	//função para editar.
	addEventRemoverFilial();	//função para remover.
}

function remover(codigoEmpresa) {	//função para remover Empresa.
	var EmpEncontrada = Empresas.filter(function (emp, index) {
		return emp.Codigo == codigoEmpresa;
	})[0];

	if (!confirm("Deseja remover o produto "
		+ EmpEncontrada.Descricao + "?"))
		return;

	Empresas = Empresas.filter(function (emp, index) {
		return emp.Codigo != codigoEmpresa;
	});
	carregarEmpresas(); //atualiza lista
}

function removerFilial(filialCodigo) { //função para remover Filial.
	var filEncontrada = Empresa.Filiais.filter(function (fil, index) {
		return fil.CodigoFilial == filialCodigo;
	})[0];

	if (!confirm("Deseja remover o produto "
		+ filEncontrada.DescricaoFilial + "?"))
		return;

	Empresa.Filiais = Empresa.Filiais.filter(function (fil, index) {
		return fil.CodigoFilial != filialCodigo;
	});
	carregarFiliais();	//atualiza lista.
}

function addEmpresa() {	//Criação da empresa e recebimento dos dados digitados

	Empresa = NewEmpresa();
	$("#ovTXT_codigo").val(Empresa.Codigo);
	$("ovTXT_nomeFantasia").val(Empresa.NomeFantasia);
	$("ovDT_dataFundacao").val(Empresa.DataFundacao);
	$("ovTXT_razaoSocial").val(Empresa.RazaoSocial);
	$("ovTXT_grupoEmpresarial").val(Empresa.GrupoEmpresarial);
	$("ovCB_ativa").val(Empresa.Ativa);
	$("ovCB_cooperativa").val(Empresa.Cooperativa);
	$("ovTXT_funcionarios").val(Empresa.Funcionarios);
	$("ovTXT_faturamento").val(Empresa.Faturamento);
	$("ovTXT_capitalSocial").val(Empresa.CapitalSocial);
	$("ovTXT_inscricaoEstadual").val(Empresa.InscricaoEstadual);
	$("ovTXT_cnpj").val(Empresa.Cnpj);
	$("ovTXT_cidade").val(Empresa.Cidade);
	$("ovTXT_cep").val(Empresa.Cep);
	$("ovTXT_bairro").val(Empresa.Bairro);
	$("ovTXT_endereco").val(Empresa.Endereco);
	$("#ovTXT_descricao").val(Empresa.Descricao);
	$("ovTXT_email").val(Empresa.Email);
	$("ovTXT_telefone").val(Empresa.Telefone);

	$("#modal-Empresa").modal("show");
	carregarEmpresas();
	carregarFiliais();
}

function addFilial() { 	//Criação da filial e recebimento dos dados digitados.

	Filial = NewFilial();
	$("#ovTXT_codigoFilial").val(Filial.CodigoFilial);
	$("#ovTXT_descricaoFilial").val(Filial.DescricaoFilial);
	$("#ovTXT_siglaFilial").val(Filial.Sigla);
	$("#ovTXT_cnpjFilial").val(Filial.CnpjFilial);
	$("#ovTXT_incricaoEstadualFilial").val(Filial.InscricaoEstadualFilial);
	$("#ovTXT_cidadeFilial").val(Filial.AtivaFilial);
	$("#ovTXT_cidadeFilial").val(Filial.CidadeFilial);
	$("#ovTXT_CEPFilial").val(Filial.CepFilial);
	$("#ovTXT_bairroFilial").val(Filial.BairroFilial);
	$("#ovTXT_flagFilial").val(Filial.Flag);
	$("#ovTXT_enderecoFilial").val(Filial.EnderecoFilial);
	$("#ovTXT_telefoneFilial").val(Filial.TelefoneFilial);
	$("#ovTXT_emailFilial").val(Filial.EmailFilial);

	$("#modal-Filial").modal("show");
	carregarEmpresas();
	carregarFiliais();
}

$(document).ready(function () { //funções que acontecem ao carregar a página.
	Empresas = [];

	$(document).on("click", "#ovBTN_Adicionar", addEmpresa);
	$(document).on("click", "#ovBTN_AdicionarFilial", addFilial);
	$(document).on("click", "#ovBTN_Salvar", salvarEmpresa);
	$(document).on("click", "#ovBTN_SalvarFilial", salvarFilial);

	addEventEditar();
	addEventEditarFilial();

	addEventRemover();
	addEventRemoverFilial();
	carregarEmpresas();
	carregarFiliais();
});

function editar(codigoEmpresa) { 	//Os campos recebem os dados salvos para a edição
	Empresa = Empresas.filter(function (emp, index) {
		return emp.Codigo == codigoEmpresa;
	})[0];

	$("#ovTXT_codigo").val(Empresa.Codigo);
	$("#ovTXT_nomeFantasia").val(Empresa.NomeFantasia);
	$("#ovDT_dataFundacao").val(Empresa.DataFundacao);
	$("#ovTXT_razaoSocial").val(Empresa.RazaoSocial);
	$("#ovTXT_grupoEmpresarial").val(Empresa.GrupoEmpresarial);
	$("#ovCB_ativa").val(Empresa.Ativa);
	$("#ovCB_cooperativa").val(Empresa.Cooperativa);
	$("#ovTXT_funcionarios").val(Empresa.Funcionarios);
	$("#ovTXT_faturamento").val(Empresa.Faturamento);
	$("#ovTXT_capitalSocial").val(Empresa.CapitalSocial);
	$("#ovTXT_inscricaoEstadual").val(Empresa.InscricaoEstadual);
	$("#ovTXT_cnpj").val(Empresa.Cnpj);
	$("#ovTXT_cidade").val(Empresa.Cidade);
	$("#ovTXT_cep").val(Empresa.Cep);
	$("#ovTXT_bairro").val(Empresa.Bairro);
	$("#ovTXT_endereco").val(Empresa.Endereco);
	$("#ovTXT_descricao").val(Empresa.Descricao);
	$("#ovTXT_email").val(Empresa.Email);
	$("#ovTXT_telefone").val(Empresa.Telefone);
	$("#modal-Empresa").modal("show");
	carregarEmpresas();
	carregarFiliais();
}

function editarFilial(codigoFilial) { 	//Os campos recebem os dados salvos para a edição
	Filial = Empresa.Filiais.filter(function (fil, index) {
		return fil.CodigoFilial == codigoFilial;
	})[0];

	$("#ovTXT_codigoFilial").val(Filial.CodigoFilial);
	$("#ovTXT_descricaoFilial").val(Filial.DescricaoFilial);
	$("#ovTXT_siglaFilial").val(Filial.Sigla);
	$("#ovTXT_cnpjFilial").val(Filial.CnpjFilial);
	$("#ovTXT_incricaoEstadualFilial").val(Filial.InscricaoEstadualFilial);
	$("#ovTXT_cidadeFilial").val(Filial.AtivaFilial);
	$("#ovTXT_cidadeFilial").val(Filial.CidadeFilial);
	$("#ovTXT_CEPFilial").val(Filial.CepFilial);
	$("#ovTXT_bairroFilial").val(Filial.BairroFilial);
	$("#ovTXT_flagFilial").val(Filial.Flag);
	$("#ovTXT_enderecoFilial").val(Filial.EnderecoFilial);
	$("#ovTXT_telefoneFilial").val(Filial.TelefoneFilial);
	$("#ovTXT_emailFilial").val(Filial.EmailFilial);
	$("#modal-Filial").modal("show");
	carregarEmpresas();
	carregarFiliais();
}

function addEventEditar() {		//ao clickar no botão editar dispara a função de editar.
	$(".btn-editar").each(function (indice, btn) {
		$(btn).on("click", function () {
			var codigoEmpresa = $(this).data("codigoempresa");
			editar(codigoEmpresa);
		});
	});
}

function addEventEditarFilial() {	//ao clickar no botão editar dispara a função de editar.
	$(".btn-editarFilial").each(function (indice, btn) {
		$(btn).on("click", function () {
			var codigoFilial = $(this).data("codigofilial")
			editarFilial(codigoFilial);
		});
	});

}

function addEventRemover() {	//ao clickar no botão remover dispara a função de remover.
	$(".btn-remover").each(function (indice, btn) {
		$(btn).on("click", function () {
			var codigoEmpresa = $(this).data("codigoempresa");
			remover(codigoEmpresa);
		});
	});
}

function addEventRemoverFilial() {	//ao clickar no botão remover dispara a função de remover.
	$(".btn-removerFilial").each(function (indice, btn) {
		$(btn).on("click", function () {
			var codigoFilial = $(this).data("codigofilial")
			removerFilial(codigoFilial);
		});
	});
}