```plantuml

@startuml
!include https://raw.githubusercontent.com/adrianvlupu/C4-PlantUML/latest/C4_Component.puml
 
LAYOUT_LEFT_RIGHT()
LAYOUT_WITH_LEGEND()
 
Person(usuario, "Usuario", "Usuario do SpotMusic")
Person(analista, "Analista de Negocios", "Analista de Negocios")
 
Container_Boundary(spotMusic, "SpotMusic APP") {
  Component(frontend, "FrontEnd", "View")
  Component(playlists, "Playlists", "Controller")
  Component(usuarios, "Usuarios", "Controller")
  Component(share, "Share", "Controller")
}
 
Container_Boundary(externos, "Midias Sociais") {
  Component(instagram, "Instagram", "REST")
  Component(facebook, "Facebook", "REST")
  Component(twitter, "Twitter", "REST")
}
 
Container_Boundary(analitics, "Analitics") {
  Component(powerBi, "PowerBI", "Aplicacao")
}
 
ComponentDb(db, "Database", "mysql")
 
Rel(playlists, db, "CRUD de Playlists")
Rel(usuarios, db, "CRUD de Usuarios")
Rel(share, db, "Busca informacoes")
 
Rel(frontend, playlists, "Realiza acao solicitada")
Rel(frontend, usuarios, "Realiza acao solicitada")
Rel(frontend, share, "Realiza acao solicitada")
 
Rel(share, instagram, "Compartilha os dados")
Rel(share, facebook, "Compartilha os dados")
Rel(share, twitter, "Compartilha os dados")
 
Rel(usuario, frontend, "Realiza Operacao")
 
Rel(powerBi, db, "Busca/Analisa/Gerar Relatorios e Dashboards")
 
Rel(analista, powerBi, "Busca/Analisa/Gerar Relatorios e Dashboards")
 
 
@enduml

```


![C4 Diagram]([https://www.plantuml.com/plantuml/png/ZOvFIyGm4CNl-HIrfowupSMJfvNrk6BnprccwT069fEGcI3zzhO5YoAAf_VcmVlDEub2rXB8N7bsL0Qi9jKajzPcU6z7hrFfYs1saHLPMnU3JGIyTewY0_dUdc-EtHgzFbni057CI_HsNXhW6NERLhxfC4la9croHnxakgelq2FLYtbCwYC3LVSeBlljgWzcXpJkq_selg2RE58Svpz0pxCeXaOs-UztyuJqVV3lAtR4bpa7Sq8UIg0F](https://www.plantuml.com/plantuml/png/bPJFZjem4CRlF8MR4qZjvj9JJyiVbaM2NGIXLKzeOXkmwjYfnowbLT-zTi3h24grUyed--UP-MP6kKSBnhfATju9HQLZdEojhV5JdXiutEs4tRlI8JTKAykLlQEwoe4P0Ug7TBNBXny_B2GekvxFSWcMe_L7cw6kQgq2NuVOdLd_w_EwsCp63yLcEPqy5jrUFFioBHxznMJyDFA7fBFW1hNgEdHWX7vFilL9PKaIficgrdRkKD2i5v-00YdGWWVxPqcydoU-qrHep6wTXwn3Rm-4ucOpq4unCCSknWp-tKisqbyiiXxvtI7anMDtQvhcC0y-13bMB2JxBFZ11s-JjOHZA03zzIBgm8RyHal9pSMBSnymkVy_ZtimF5GSlbVadtzRvJyjDwf9CXTC09ALfW84NbaL2Yti35GUdKOTqYp7g-AYb2rGNchzBRJbB6-GzY2ivSPV5YULk5ibDyEsWcASgjVNvTRwmCr0X6utQfe5l9Q20WKTeqTyL7PPwO4HM2W1UO2h8twNpOeikMpFho67o_Kex5AQPIzmSMgNM9pWYOgpQf21Gmf4gAqs5L3DCUPiRLTxUvRSU_u59FWWgBqZOO71EN9waofvzPEuGhTvqYw_lHAXbM2ia7iW6Wa3TcasBSKhuBGNDrZIxhOF7ZsaufzhReA12AULI6tFJxy5o2UUDSHJO7Le6k5a1BWlDHYMqgN_J8prrZZtlaPNoRy0) "test")
