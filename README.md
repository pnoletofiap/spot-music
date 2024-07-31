# Diagrama de cponponentes da solução
## 1. Código plantUML do digrama de componentes da solução
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
## 2. Imagem do diagrama de componentes da solução
![C4 Diagram](https://www.plantuml.com/plantuml/png/bPJFZjem4CRlF8MR4qZjvj9JJyiVbaM2NGIXLKzeOXkmwjYfnowbLT-zTi3h24grUyed--UP-MP6kKSBnhfATju9HQLZdEojhV5JdXiutEs4tRlI8JTKAykLlQEwoe4P0Ug7TBNBXny_B2GekvxFSWcMe_L7cw6kQgq2NuVOf3FhVtrU5vlP-A7OBAUJnwBRYsTVfiMZlvYCdqR-a7GMtA1MNOSEZD3lIRO-gIn9mZHPrThE7GgQzU8JK205Ml1W_oo9D_J4TveAZTcjyv1rwFs1KDni1jef1kROnPZ1ltl9HlgBHTOZlpk4l9ZiRatJ7UR1Xo37YeLadmK_-E1jifPm30MWlrv47TYGtsWfkRbuSUu39lV_vt4FXeUAm_UA_FDlg_odvKOrIUQ22K2oqbI0m2khGg65dO7AezEeGvhbU5LSbB85oakjluMsdEKDqXw4jTpuo-Aa4dUhv6ROLb2CK_NwkjnQ7xWPYD3jHaspWDTIKA2WO_I8ZyekApqm0Wib80zmTSJlibcH9PVj-JNaSBaUXLrAi-m5Baxj4eiJF55nLWqoS4Y12BNLfWAgESQShUrgRy-IUy-_W0GV1BLt92mmE4TERr8bhtuIL-WsJzhbjrSYj1AC5N8FH2DXm2xDfgLu1PpsuWPBsjtsmQE7LFnppKqm4E6q4gdj-Uct0Fd4iuPu2gmEJIESZ03tfGR3KhhqducntXhdtjVeAlaN)

## 3. Atualização do diagrama
1. Para atualizar o diagrama de componentes da solução acesse o link do plantUML IDE https://www.plantuml.com/plantuml e copie o código para a area de texto 
2. Realize os ajustes no código da solução
3. copie o lin gerado e atualize a referencia na sessão 1. e 2. da documentação
