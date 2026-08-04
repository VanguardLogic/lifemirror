const verifyAuthToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        let user = {
            sub: 'default-user',
            email: 'user@lifemirror.local',
            name: 'LifeMirror User'
        };

        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            if (token && token !== 'null' && token !== 'undefined') {
                try {
                    const parsed = JSON.parse(token);
                    if (parsed && parsed.email) {
                        user = {
                            sub: parsed.email,
                            email: parsed.email,
                            name: parsed.name || 'User'
                        };
                    }
                } catch (e) {
                    // Ignore token parse error, fallback to default user
                }
            }
        }

        req.user = user;
        req.auth = { sub: user.sub };
        next();
    } catch (error) {
        console.error('Auth middleware error:', error.message);
        next();
    }
};

module.exports = verifyAuthToken;
