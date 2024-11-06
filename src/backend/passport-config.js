const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { ConfigBanco } = require('./query_banco/config_banco.js'); 
const { CriptografarSenha } = require('./cipher.js'); 

passport.use(new LocalStrategy(
    async (name, password, done) => {
        const db = ConfigBanco(); // Conecta ao banco

        db.get('SELECT * FROM USERS WHERE NOME = ?', [name], async (err, user) => {
            //Verifica se o usuário foi encontrado
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Usuário não encontrado.' });
            }

            // Criptografa a senha fornecida e compara
            const senhaCriptografada = await CriptografarSenha(password);
            //verifica se as senhas fornecidas são iguais
            if (user.password !== senhaCriptografada) {
                return done(null, false, { message: 'Senha incorreta.' });
            }

            return done(null, user);
        });

        db.close(); // Fecha a conexão com o banco após a operação
    }
));

// Serialização e deserialização do usuário
//Armazena o identificador ID do usuário na sessão
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const db = ConfigBanco();

    db.get('SELECT * FROM USERS WHERE ID = ?', [id], (err, user) => {
        if (err) {
            return done(err);
        }
        done(null, user);
    });

    db.close();
});

module.exports = passport;