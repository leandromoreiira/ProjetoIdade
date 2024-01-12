function verificar()
{
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano)
    {
        window.alert('ERROR , Verifique os dados e tente novamente!')
    } else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img =document.createElement('img')
        if(fsex[0].checked)
        {
            genero = "Homem"
            if (idade >=0 && idade <10)
            {
                //crianca
                img.setAttribute('src','criancamasc.jpg')
            }else if(idade <=21)
            {
                //jovem
                img.setAttribute('src','jovemmsc.jpg')
            }else if (idade <50)
            {
               //adulto 
               img.setAttribute('src','adultomasc.jpg')
            }else
            {
                //idoso
                img.setAttribute('src','idosomasc.jpg')
            }

        }else
        {
            genero = 'Mulher'
            if(idade >=0 && idade <10)
            {
                //crianca
                img.setAttribute('src','criancafem.jpg')
            }else if(idade <21)
            {
                //jovem
                img.setAttribute('src','jovemfem.jpg')
            }else if (idade <50)
            {
                //adulto
                img.setAttribute('src','adultofem.jpg')
            }else
            {
                //idoso
                img.setAttribute('src','idosofem.jpg')
            }

        }
      
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}