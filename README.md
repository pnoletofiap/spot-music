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
