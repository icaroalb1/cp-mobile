import { StyleSheet, Text, View } from "react-native"

interface ResultadosProps {
    nomeProduto: string
    precoProduto: number
    percentual: number
    valorFinal: number
}

export function Resultados({ nomeProduto, precoProduto, percentual, valorFinal }: ResultadosProps) {
    return (
        <View style={estilos.containerResultados}>
            <Text style={estilos.titulo}>Resultado</Text>
            <View style={estilos.linha}>
                <Text style={estilos.rotulo}>Nome do produto</Text>
                <Text style={estilos.valor}>{nomeProduto}</Text>
            </View>
            <View style={estilos.linha}>
                <Text style={estilos.rotulo}>Valor original</Text>
                <Text style={estilos.valor}>R$ {precoProduto.toFixed(2)}</Text>
            </View>
            <View style={estilos.linha}>
                <Text style={estilos.rotulo}>Acréscimo</Text>
                <Text style={estilos.valor}>{percentual}%</Text>
            </View>
            <View style={estilos.linha}>
                <Text style={estilos.rotulo}>Valor final</Text>
                <Text style={estilos.valor}>R$ {valorFinal.toFixed(2)}</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    containerResultados: {
        backgroundColor: '#D0E0FC', // Azul clarinho para destacar
        borderRadius: 8,
        padding: 15,
        gap: 10,
        marginTop: 15
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    linha: {
        flexDirection: 'column'
    },
    rotulo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555'
    },
    valor: {
        fontSize: 16
    }
});
