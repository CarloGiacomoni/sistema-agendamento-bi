function sincronizarAgendaOficial() {
  var aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("GESTAO_MSO");
  // getDisplayValues lê exatamente o que você vê escrito (Ex: "09:30")
  var dados = aba.getDataRange().getDisplayValues(); 
  var agenda = CalendarApp.getDefaultCalendar();
  var contador = 0;

  for (var i = 1; i < dados.length; i++) {
    var cliente = dados[i][3];    // Coluna D
    var dataTexto = dados[i][4];    // Coluna E
    var horarioTexto = dados[i][5]; // Coluna F
    var statusSinc = dados[i][13];  // Coluna N

    if (dataTexto && cliente && statusSinc !== "OK") {
      try {
        // Quebramos o texto da data (DD/MM/YYYY)
        var partesData = dataTexto.split("/");
        var dia = parseInt(partesData[0], 10);
        var mes = parseInt(partesData[1], 10) - 1; // Meses no JS são 0-11
        var ano = parseInt(partesData[2], 10);
        
        var hora = 9;
        var min = 0;

        // Quebramos o texto do horário (HH:MM)
        if (horarioTexto && horarioTexto.includes(":")) {
          var partesHora = horarioTexto.split(":");
          hora = parseInt(partesHora[0], 10);
          min = parseInt(partesHora[1], 10);
        }

        // Criamos a data peça por peça
        var inicio = new Date(ano, mes, dia, hora, min, 0);
        var fim = new Date(ano, mes, dia, hora + 1, min, 0);

        agenda.createEvent("🤝 Atendimento: " + cliente, inicio, fim);
        
        aba.getRange(i + 1, 14).setValue("OK"); 
        contador++;
        
      } catch (e) {
        Logger.log("Erro na linha " + (i+1) + ": " + e);
      }
    }
  }
  
  if (contador > 0) {
    console.log("🚀 SUCESSO: " + contador + " agendamentos gravados no horário!");
  } else {
    console.log("✅ TUDO OK: Nada novo para sincronizar.");
  }
}