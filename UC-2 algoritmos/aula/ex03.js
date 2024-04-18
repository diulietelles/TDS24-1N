const filme = {
    dadosDirecao: 'Choi Rome',  
    nomeFilme: 'Sorriso Real',
    anoLancamento: 2023,
    elenco:['Sa-rang', 'Goo Won', 'Chefe Kim'], 
    visto: true
    
  }
  console.log(filme.dadosDirecao)
  console.log(filme.nomeFilme)
  console.log(filme['anoLancamento'])
  console.log(filme['visto'])
  console.log(filme['elenco'])

  filme.personagens = ['San', 'Goon', 'Chim']
  console.log(` o ator ${filme.elenco[0]}, interpreta o personagem ${filme.personagens[0]}`)
  console.log(` o ator ${filme.elenco[1]}, interpreta o personagem ${filme.personagens[1]}`)
  console.log(` o ator ${filme.elenco[2]}, interpreta o personagem ${filme.personagens[2]}`)
  console.log(filme.elenco[1], filme.personagens[1])
  console.log(filme.elenco[2], filme.personagens[2])
  
  filme.elenco[0] = 'Xuxa'
  console.log(filme.elenco)
  console.log(filme.personagens)
  
  