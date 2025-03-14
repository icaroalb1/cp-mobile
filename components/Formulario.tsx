import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Botao } from "./botao";
import { Entrada } from "./entrada";
import { Resultados } from "./resultados";

export function Formulario() {
    const [nomeProduto, setNomeProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')
    const [percentual, setPercentual] = useState('')
    const [valorFinal, setValorFinal] = useState<number>()
    const [erro, setErro] = useState('')

    function calcular() {
        if (!nomeProduto || !precoProduto || !percentual) {
            setErro('Preencha todos os campos.')
            return
        }

        if (isNaN(Number(precoProduto)) || isNaN(Number(percentual))) {
            setErro('Os valores devem ser numéricos.')
            return
        }

        const resultado = Number(precoProduto) * (Number(percentual) / 100) + Number(precoProduto)
        setErro('')
        setValorFinal(resultado)
    }

    return (
        <View style={estilos.container}>
            {erro.length > 0 && <Text style={estilos.erro}>{erro}</Text>}
            
            <View style={estilos.inputContainer}>
                <Entrada 
                    tipo="default" 
                    rotulo="Nome do produto" 
                    placeholder="Ex: Caixa de leite" 
                    valor={nomeProduto} 
                    aoMudarTexto={setNomeProduto} 
                />
            </View>

            <View style={estilos.inputContainer}>
                <Entrada 
                    tipo="number-pad" 
                    rotulo="Valor original" 
                    placeholder="Ex: 8.50" 
                    valor={precoProduto} 
                    aoMudarTexto={setPrecoProduto} 
                />
            </View>

            <View style={estilos.percentualContainer}>
                <Entrada 
                    tipo="number-pad" 
                    rotulo="Porcentagem de aumento" 
                    placeholder="Ex: 50" 
                    valor={percentual} 
                    aoMudarTexto={setPercentual} 
                    estiloCustomizado={estilos.inputPercentual}
                />
                <Text style={estilos.percentualSimbolo}>%</Text>
            </View>

            <Botao titulo="Calcular" aoPressionar={calcular} />

            {valorFinal && (
                <Resultados 
                    nomeProduto={nomeProduto} 
                    precoProduto={Number(precoProduto)} 
                    percentual={Number(percentual)} 
                    valorFinal={valorFinal} 
                />
            )}
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        gap: 12,
        width: '100%',
        alignItems: 'center',
    },
    erro: {
        color: '#ff0000',
        fontSize: 14,
        marginBottom: 10,
    },
    inputContainer: {
        width: '100%', 
    },
    percentualContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    inputPercentual: {
        flex: 1, // Faz o input ocupar o espaço disponível
    },
    percentualSimbolo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#333',
    }
});
