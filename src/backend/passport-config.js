const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    async (username, password, done) => {
        // Aqui você verifica se o usuário existe e se a senha está correta
        const user = await User.findOne({ username });
        if (!user) {
            return done(null, false, { message: 'Usuário não encontrado.' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return done(null, false, { message: 'Senha incorreta.' });
        }
        return done(null, user);
    }
));

// Serialização e deserialização
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});