import { Image, Pressable, StyleSheet, Text } from "react-native";

interface BotaoProps {
    titulo: string
    aoPressionar?: () => void
}

export function Botao({ titulo, aoPressionar }: BotaoProps) {
    return (
        <Pressable style={estilos.botao} onPress={aoPressionar}>
            <Image style={estilos.imagemBotao} source={require('./../assets/calculadora.png')} />
            <Text style={estilos.textoBotao}>{titulo}</Text>
        </Pressable>
    )
}

const estilos = StyleSheet.create({
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        backgroundColor: '#4A90E2', // Azul mais moderno
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        width: '100%', // Ajusta para largura total do formulário
        justifyContent: 'center',
        gap: 10,
    },
    imagemBotao: {
        width: 20,
        height: 20
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
