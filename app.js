class SpeechRecognitionApi {
    constructor(options) {
        const speechToText = window.speechRecognition || window.webkitSpeechRecognition;
        this.speechApi = new speechToText();
        this.output = options.output ? options.output : document.createElement("div");
        this.speechApi.continuous = true;
        this.speechApi.interimResult = false;
        this.speechApi.onresult = (event) => {
            var resultIndex = event.resultIndex;
            var transcript = event.results[resultIndex][0].transcript;
            this.output.textContent = transcript;
            console.log(this.output)
        };
    }
}