# Sistema Integrado de Gestão de Agendamentos e BI
### Ecossistema Google Workspace (Sheets, Apps Script, Looker Studio)

## 📌 Visão Geral
Este projeto foi desenvolvido para solucionar a fragmentação de dados e gargalos operacionais de um cliente real. A solução centraliza a gestão de clientes e parceiros, automatiza a sincronização com agendas profissionais e fornece insights estratégicos através de um dashboard mobile-first.

![Visão Geral do Projeto](visuals/capa_projeto.png)
*(Interface do Google Apps Script e Dashboard do Looker Studio com dados de demonstração anonimizados)*

---

## 💼 Problema de Negócio
O cliente enfrentava dificuldades com processos manuais e dados descentralizados em múltiplas planilhas. 
* **Riscos:** Inconsistência de dados, erros de digitação e perda de compromissos.
* **Impacto:** Impossibilidade de medir a saúde financeira e a performance de parceiros em tempo real.

## 🛠️ Arquitetura e Solução
A solução utiliza o ecossistema gratuito do Google para garantir **custo zero de licenciamento** e alta disponibilidade.

### 1. Modelagem e Governança (Single Source of Truth)
* **Repositório Central:** Consolidação de bases legadas no Google Sheets.
* **Data Quality:** Implementação de validação de dados restritiva e abas parametrizadas para garantir a integridade da entrada de dados (filtros de parceiros, origens e tipos de negócio).

### 2. Automação (Google Apps Script)
* **Sincronização via API:** Script em JavaScript para leitura da base e criação automática de eventos no Google Calendar.
* **Gatilhos (Triggers):**
    * **Automático (CRON):** Varredura horária em background para novos registros.
    * **Manual:** Macro acionada por botão para sincronização imediata.
* **Segurança:** Sistema de flags de validação (SINC) para evitar duplicidade de eventos.

### 3. Business Intelligence (Looker Studio)
* **Dashboard Mobile-First:** Visualização de KPIs (Origem, Tipo e Parceiro) acessível via smartphone.
* **Métricas Chave:** Taxas de conversão, valores recebidos vs. em aberto e filtros dinâmicos de período.

---

## 📊 Resultados Obtidos
* **Eficiência Operacional:** Eliminação do retrabalho na criação de agendas manuais.
* **Confiabilidade:** Redução de 100% nos erros de digitação em categorias críticas através de listas parametrizadas.
* **Tomada de Decisão:** Visualização clara do fluxo de caixa e performance de leads em segundos.

---

## 🔐 Nota sobre Privacidade e Propriedade Intelectual
Por se tratar de uma solução desenvolvida para um cliente real, os dados sensíveis, IDs de planilhas e o código-fonte proprietário foram omitidos deste repositório para garantir a segurança da informação e a ética profissional. 

As imagens apresentadas na documentação utilizam dados de demonstração (fictícios) e uma versão simplificada do código para fins de demonstração de competências em:
* Arquitetura de Dados
* Automação de Processos (ETL)
* Visualização de Dados (BI)

---
**Arquiteto de Dados:** Carlo Giacomoni  
**Stack:** Google Sheets, Google Apps Script, Google Calendar API, Looker Studio.