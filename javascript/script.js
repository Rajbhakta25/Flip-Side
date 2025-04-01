document.getElementById("play").onclick = function () {
    window.location.href = "game.html";
};

document.getElementById("help").onclick = function () {
    window.location.href = "help.html";
};




// DO NOT REMOVE ANYTHING FROM LINE 5
//import { AppRegistry, View, Text, StyleSheet, TouchableHighlight, Alert, TextInput, ScrollView } from 'react-native';

/*import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TouchableHighlight, TextInput, ScrollView } from 'react-native';
import { Alert } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScreen: 'Home',
            chatInput: '',
            Plan: '',
            chatInputTwo: '',
            chatMessage: '',
            password: '',
            score: 0,
            level: 1,
            colorSequence: [],
            userInput: [],
            isFlashing: false,
            flashingColors: [],
        };
    }

    setScreen = (screen) => {
        this.setState({ currentScreen: screen }, () => {
            if (screen === 'Play') {
                this.startNewGame();
            }
        });
    };

    RE COMMENT NEXT LINE
    /* Game Methods 
    startNewGame() {
        const newColor = this.getRandomColor();
        this.setState(prevState => ({
            colorSequence: [...prevState.colorSequence, newColor],
            userInput: [],
            flashingColors: [],
        }), () => {
            setTimeout(() => this.startFlashing(), 1000);
        });
    }

    getRandomColor() {
        const colors = ['Red', 'Yellow', 'Blue', 'Green'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    startFlashing() {
        const { colorSequence } = this.state;
        this.setState({ isFlashing: true });

        colorSequence.forEach((color, index) => {
            setTimeout(() => {
                this.flashColor(color);
            }, index * 500);
        });

        setTimeout(() => {
            this.setState({ isFlashing: false });
        }, colorSequence.length * 1000);
    }

    flashColor(color) {
        this.setState({ flashingColors: [color] }, () => {
            setTimeout(() => {
                this.setState({ flashingColors: [] });
            }, 200);
        });
    }

    handleUserInput(color) {
        const { userInput, colorSequence, isFlashing } = this.state;

        if (!isFlashing) {
            const newUserInput = [...userInput, color];
            this.setState({ userInput: newUserInput }, () => {
                if (newUserInput.length === colorSequence.length) {
                    if (JSON.stringify(newUserInput) === JSON.stringify(colorSequence)) {
                        this.setState(prevState => ({
                            score: prevState.score + 10,
                            level: prevState.level + 1,
                            userInput: [],
                        }), () => {
                            setTimeout(() => this.startNewGame(), 1000);
                        });
                    } else {
                        this.handleGameOver();
                    }
                }
            });
        }
    }

    handleGameOver() {
        try {
            Alert.alert("Game Over", "Incorrect sequence! Your score has been reset.", [
                { text: "OK", onPress: () => this.resetGame() }
            ]);
        } catch (error) {
            console.error("Alert error:", error);
            /* MESSAGE USER THE GAME IS RESET DUE TO INCORRECT SEQUENCE
            this.resetGame()
        }
    }

    resetGame() {
        this.setState({ score: 0, colorSequence: [], userInput: [], level: 1 }, () => {
            setTimeout(() => this.startNewGame(), 1000);
        });
    }

    _handleTextChange = (text) => {
        this.setState({ chatInput: text });
        this.setState({ chatInputTwo: text });
    };







    RE COMMENT NEX LINE
    /* SCREEN RENDERS 

    renderScreen() {
        const { currentScreen, score, level, isFlashing, flashingColors } = this.state;

        if (currentScreen === 'Home') {
            return (
                <View style={styles.container}>
                    <TouchableHighlight onPress={() => this.setScreen('Password')}>
                        <Text style={styles.Title}>Flip Side</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonContainer} onPress={() => this.setScreen('Play')}>
                        <Text style={styles.buttonText}>Play</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonContainer} onPress={() => this.setScreen('Help')}>
                        <Text style={styles.buttonText}>Help</Text>
                    </TouchableHighlight>
                </View>
            );

        } else if (currentScreen === 'Password') {
            const { chatMessageThree, password } = this.state;
            return (
                <View style={styles.container}>
                    <Text style={styles.PageTitle}>Password</Text>
                    <View style={styles.chatBubble}>
                        <Text style={styles.chatText}>{chatMessageThree || " "}</Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type your message..."
                        placeholderTextColor="black"
                        onChangeText={this._handleTextChange}
                        value={this.state.chatInputTwo}
                    />
                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => {
                            let responseMessage;
                            if (this.state.chatInputTwo === "" || password === "") {
                                responseMessage = "Incorrect";
                            } else if (this.state.chatInputTwo === password) {
                                this.setScreen('HelpPage');
                            } else {
                                responseMessage = "Incorrect";
                            }
                            this.setState({
                                chatInputTwo: '',
                                chatMessageThree: responseMessage,
                            });
                        }}>
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => this.setScreen('Home')}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableHighlight>
                </View>
            );

        } else if (currentScreen === 'Play') {
            return (
                <View style={styles.playcontainer}>
                    <Text style={styles.scoreText}>Score: {score}</Text>
                    <Text style={styles.levelText}>Level: {level}</Text>
                    <View style={styles.buttonRow}>
                        {['Red', 'Yellow'].map(color => (
                            <TouchableHighlight
                                key={color}
                                style={[styles.colorButton, { backgroundColor: flashingColors.includes(color) ? 'white' : color }]}
                                onPress={() => this.handleUserInput(color)}
                                disabled={isFlashing}
                            >
                                <Text style={styles.buttonText}>{color}</Text>
                            </TouchableHighlight>
                        ))}
                    </View>
                    <View style={styles.buttonRow}>
                        {['Blue', 'Green'].map(color => (
                            <TouchableHighlight
                                key={color}
                                style={[styles.colorButton, { backgroundColor: flashingColors.includes(color) ? 'white' : color }]}
                                onPress={() => this.handleUserInput(color)}
                                disabled={isFlashing}
                            >
                                <Text style={styles.buttonText}>{color}</Text>
                            </TouchableHighlight>
                        ))}
                    </View>
                    <TouchableHighlight style={styles.buttonContainer} onPress={() => this.setScreen('Home')}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableHighlight>
                </View>
            );

        } else if (currentScreen === 'Help') {
            return (
                <View style={styles.container}>
                    <Text style={styles.PageTitle}>The Goal</Text>
                    <Text style={styles.paragraph}>In Flip Side, players must remember and replicate increasingly difficult patterns of four colors: Red, Blue, Yellow, and Green. Tap the correct order of colors and advance to the next pattern. Good luck!</Text>
                    <TouchableHighlight
                        style={styles.helpButton}
                        onPress={() => {
                            this.setScreen('Chat Bot')
                            this.setState({
                                chatInput: '',
                                chatMessage: "Please enter your zip-code. We will return resources near you.",
                            });
                        }}
                    >
                        <Text style={styles.helpText}>Chat</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => this.setScreen('Home')}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableHighlight>
                </View>
            );

        } else if (currentScreen === 'HelpPage') {
            return (
                <View style={styles.container}>
                    <Text style={styles.PageTitle}>Welcome</Text>
                    <TouchableHighlight
                        style={styles.touchableButton}
                        onPress={() => {
                            this.setScreen("ResourceEnter")
                            this.setState({
                                chatInput: '',
                                chatMessage: "",
                            });
                        }}
                    >
                        <Text style={styles.buttonText}>Resources</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.touchableButton}
                        onPress={() => this.setScreen('Plan')}
                    >
                        <Text style={styles.buttonText}>Plan</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => this.setScreen('Home')}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.planHelpButton}
                        onPress={() => {
                            this.setScreen('Home')
                            this.setState({
                                chatInput: '',
                                chatMessage: "Please enter your zip-code. We will return resources near you.",
                            });
                        }}
                    >
                        <Text style={styles.helpText}>Escape</Text>
                    </TouchableHighlight>

                </View>

            );

        } else if (currentScreen === 'Chat Bot') {
            const { chatMessage, chatInput, chatMessageTwo, password } = this.state;
            return (
                <View style={styles.container}>
                    <Text style={styles.PageTitle}>Welcome! Need help?</Text>

                    <View style={styles.chatBubble}>
                        <Text style={styles.chatText}>{chatMessageTwo || "This bot is still under development and may not be able to answer all questions."}</Text>
                    </View>

                    <TextInput
                        style={styles.textInput}
                        placeholder="Type your message..."
                        placeholderTextColor="black"
                        onChangeText={this._handleTextChange}
                        value={chatInput}
                    />

                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => {
                            let responseMessage;
                            if (chatInput.toLowerCase() === 'sos' || chatInput === '911') {
                                responseMessage = "Thank you for reaching out. Please set your 6-digit password.";
                            } else if (chatInput.length === 6 && /^\d+$/.test(chatInput)) {
                                if (chatInput === password) {
                                    responseMessage = "This is already your password, use it on the home screen by selecting the title";
                                } else if (password !== '') {
                                    responseMessage = "You have already set a password. To reset this, type reset. A reset will reset all data.";
                                } else {
                                    responseMessage = "You have successfully set your password.";
                                    this.setState({ password: chatInput });
                                }
                            } else if (chatInput.toLowerCase() === "reset") {
                                this.setState({ password: '', chatInput: '', Plan: '' }); // Reset password
                                responseMessage = "Password and data reset.";
                            } else {
                                responseMessage = "We currently cannot help with this.";
                            }
                            this.setState({
                                chatInput: '',
                                chatMessageTwo: responseMessage
                            });
                        }}
                    >
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => this.setScreen('Home')}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableHighlight>
                </View>
            );

        } else if (currentScreen === 'ResourceEnter') {
            const { chatMessage, chatInput } = this.state;
            const { frontOfZip } = "";
            return (
                <View style={styles.container}>
                    <Text style={styles.PageTitle}>Resources</Text>

                    <View style={styles.chatBubble}>
                        <Text style={styles.chatText}>{chatMessage || "Please enter your zip-code. We will return resources near you."}</Text>
                    </View>

                    <TextInput
                        style={styles.textInput}
                        placeholder="Type your message..."
                        placeholderTextColor="black"
                        onChangeText={this._handleTextChange}
                        value={chatInput}
                    />

                    <TouchableHighlight
                        style={styles.touchableButton}
                        // HERE DOWN NEEDS RESOURCES
                        onPress={() => {
                            let responseMessage;
                            let frontOfZip = chatInput.substring(0, 3);
                            if (frontOfZip === '882') {
                                responseMessage = "Carlsbad\n\n Carlsbad Battered Family Shelter: \n\n(24/7): 575-885-4615 \n520 N 6th St, Carlsbad, NM\n\nGranny's House:\n\n24/7: 575-365-5144 \n811 W Texas Ave, Artesia, NM\n\nThis list of shelters and help centers is NOT final. More may become available as time goes on. Please do not lose hope.";
                            } else if (frontOfZip === '870' || frontOfZip === '871') {
                                responseMessage = "Albuquerque:\n-----------\n\n Albuquerque SANE Collaborative: \n\n(24/7:) 505-884-7263 \n625 Silver Ave SW, Albuquerque, NM\n-----------\n\nEnlace Comunitario:\n\n(8am-5pm M-F): 505-246-9872 \n2425 Alamo Ave SE, Albuquerque, NM\nS.A.F.E House:\n\n24/7: 505-247-4219\n801 Encino Pl NE, Albuquerque, NM";
                            } else if (frontOfZip === '875') {
                                responseMessage = "Santa Fe:\n-----------\n\n Esperanza Shelter: \n\n(24/7):505-473-5200 \n3130 Rufina St, Santa Fe, NM\n-----------\n\nHaven House\n\nNumber:(505)-896-4869\nAddress is not listed for safety reasons.\n\n This list of shelters and help centers is NOT final. More may become available as time goes on.";
                            } else {
                                responseMessage = "Your Zip Code does not have support. Please do not lose hope.\nWe are adding more resources as we find them.\nPlease check again soon"
                            }
                            this.setScreen('Resources')
                            this.setState({
                                chatInput: '',
                                chatMessage: responseMessage
                            });
                        }}
                    >
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => this.setScreen('Password')}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.planHelpButton}
                        onPress={() => {
                            this.setScreen('Home')
                            this.setState({
                                chatInput: '',
                                chatMessage: "Please enter your zip-code. We will return resources near you.",
                            });
                        }}
                    >
                        <Text style={styles.helpText}>Escape</Text>
                    </TouchableHighlight>
                </View>
            );
        } else if (currentScreen === 'Resources') {
            const { chatMessage, chatInputTwo } = this.state
            return (
                <View style={styles.container}>
                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => {
                            this.setScreen('Password')
                            let chatMessage;
                            let chatInput;
                            this.setState({
                                chatMessage: '',
                                chatInputTwo: '',
                            });
                        }}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableHighlight>

                    <View style={styles.chatBubble}>
                        <Text style={styles.chatText}>{chatMessage}</Text>
                    </View>

                    <TouchableHighlight
                        style={styles.planHelpButton}
                        onPress={() => {
                            this.setScreen('Home')
                            this.setState({
                                chatInput: '',
                                chatMessage: "Please enter your zip-code. We will return resources near you.",
                            });
                        }}
                    >
                        <Text style={styles.helpText}>Escape</Text>
                    </TouchableHighlight>

                </View>
            );
        } else if (currentScreen === 'Emergency') {
            return (
                <View style={styles.container}>
                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => {
                            this.setScreen('Password')
                            let chatMessage;
                            let chatInput;
                            this.setState({
                                chatMessage: '',
                                chatInputTwo: '',
                            });
                        }}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableHighlight>
                </View>
            )
        } else if (currentScreen === 'Plan') {
            return (
                <View style={styles.container}>
                    <ScrollView style={{ width: '100%' }} keyboardDismissMode="on-drag">
                        <TextInput
                            style={styles.planTextInput, { height: 250, width: '100%' }}
                            placeholder="Type here"
                            placeholderTextColor="black"
                            onChangeText={(text) => this.setState({ Plan: text })}
                            value={this.state.Plan}
                            multiline={true}
                        />
                    </ScrollView>
                    <TouchableHighlight
                        style={styles.planHelpButton}
                        onPress={() => {
                            this.setScreen('Home')
                            this.setState({
                                chatInput: '',
                                chatMessage: "Please enter your zip-code. We will return resources near you.",
                            });
                        }}
                    >
                        <Text style={styles.helpText}>Escape</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => this.setScreen('Password')}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableHighlight>
                </View>
            );
        }
        return null;
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderScreen()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#e0f7fa',
    },
    PageTitle: {
        margin: 24,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#54443b',
    },
    Title: {
        margin: 24,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#54443b',
        fontFamily: 'Roboto',
    },
    paragraph: {
        margin: 20,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        color: '#004d40',
    },
    chatBubble: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        margin: 2,
        alignSelf: 'center',
        maxWidth: '80%',
    },
    chatText: {
        color: '#e8e3e5',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    planHelpButton: {
        backgroundColor: '#00796b',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: -20,
        margin: 5,
        right: -60,
    },

    helpButton: {
        backgroundColor: '#00796b',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    helpText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    textInput: {
        height: 40,
        width: '80%',
        borderColor: '#00796b',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    colorButton: {
        paddingHorizontal: 15,
        height: 80,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center'
    },

    buttonContainer: {
        backgroundColor: '#54443b',
        borderRadius: 25,
        height: 40,
        width: 150,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    touchableButton: {
        backgroundColor: '#00796b',
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 20,
    },
    theGoal: {
        fontSize: 28,
        margin: 20,
        textAlign: 'center',
        color: '#004d40',
    },
    scoreLevelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 40,
        alignSelf: 'center',
        paddingVertical: 10,
    },

    scoreText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#54443b',
        textAlign: 'center',
        margin: 10,
    },

    levelText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#54443b',
        textAlign: 'center',
        margin: 10,
    },


});

AppRegistry.registerComponent('main', () => App);
*/
