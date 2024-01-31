import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser"; 

import __dirname from "./utils.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); 

const transport = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: "nahuel23009@gmail.com",
        pass: "ogidudimuspzmfcq"
    }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/mail", async (req, res) => {
    const toEmail = req.body.email; 

    const result = await transport.sendMail({
        from: "nahuel23009@gmail.com",
        to: toEmail, 
        subject: "Ella me llama",
        html: `
            <div>
                <p>
                    Te tengo al lado y me siento solo
                    El miedo me come y no entiendo cómo
                    Razones no faltan para querer irme, pero si me voy quizás falte todo
                    Ella me llama, y me llama, y no sé qué hacer
                    Llama, y me llama, y si volveré
                    Porque tú eres mi pasado y lo mejor que me había pasado, también
                    Y me llama, me llama, y no sé qué hacer
                    Llama, y me llama, y si volveré
                    El no poder entendernos es lo que no logro entender
                    ¿Cómo voy a darte mi mundo entero?
                    Si no estoy entero para darte el mundo
                    ¿Cómo pedirle milagros al tiempo?
                    Si tú me cambiabas en un segundo
                    Te digo "para", y me pones peros
                    Separados, nunca y tampoco juntos
                    Entonces, tú dime enserio, ¿Qué hacemos?
                    Te lo pregunto
                    Porque ella me llama, y me llama, y no sé qué hacer
                    Llama, y me llama, y si volveré
                    Porque tú eres mi pasado y lo mejor que me había pasado, también
                    Y me llama, me llama, y no sé qué hacer
                    Llama, y me llama, y si volveré
                    El no poder entendernos es lo que no logro entender
                    Vivo refugiado en mi pasado
                    A veces la luz no hace verlo claro
                    Y si yo no te hubiera conocido, te prometo que te hubiera inventado
                    Todo por delante, contigo al lado
                    Viviendo un sueño, pero drogado
                    Expertos en transformar todo lo fácil en complicado
                    Porque tu te quedarás, solo por el miedo a nunca verme más
                    Me dice que hacemos y olvidar, te digo olvidar
                    Ojalá que el tiempo nos sepa juntar
                    Y los meses pasarán, pero no por dentro y tú me cambiarás
                    Por otra persona y ya no será igual
                    Si todo lo echamos a perder, ¿Qué voy a encontrar?
                    Porque ella me llama, y me llama, y no sé qué hacer
                    Llama, y me llama, y si volveré
                    Porque tú eres mi pasado y lo mejor que me había pasado, también
                    Y me llama, me llama, y no sé qué hacer
                    Llama, y me llama, y si volveré
                    El no poder entendernos es lo que no logro entender
                    ¿Cómo voy a darte mi mundo entero?
                    Si no estoy entero para darte el mundo
                    ¿Cómo pedirle milagros al tiempo?
                    Si tú me cambiabas en un segundo
                    Las nubes se posan sobre mi cielo
                    Volando en tu llanto, y en lo más profundo
                    Entonces, tú dime enserio, ¿Qué hacemos?
                    No encuentro el rumbo (No encuentro el rumbo)
                    Y me llama, me llama, y no sé qué hacer
                    Llama, y me llama, y si volveré
                    El no poder entendernos es lo que no logro entender
                    Porque ella me llama, me llama, y no sé qué hacer
                    Llama, me llama y no volveré
                <p/>
                <img src="cid:image1" />
            <div/>
        `,
        attachments: [
            {
                filename: "momo.jpg",
                path: __dirname + "/imgs/momo.jpg",
                cid: "image1"
            }
        ]
    });
    console.log(result);
    res.send("Por favor Revise su Gmail!!");
});

app.listen(8080, () => console.log("Running..."));
