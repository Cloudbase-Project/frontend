import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';
import { signIn } from 'next-auth/react';

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		Credentials({
			name: 'Credentials',
			authorize: async (credentials) => {
				console.log(credentials);
				try {
					// TODO:
					const user = await axios.post(
						'http://cloudbase-main-svc/auth/login',
						{
							email: credentials.email,
							password: credentials.password,
						}
					);
					console.log('userdataaaa', user);

					if (user) {
						return user;
					} else {
						return null;
					}
				} catch (e) {
					console.log(e.response.data.errors[0].message);
					throw new Error(e.response.data.errors[0].message);
				}
			},
		}),
	],

	callbacks: {
		async jwt({ token, account, user }) {
			// console.log('whatever is here : ', token, account);
			// console.log(user);
			console.log('efgh', token, account, user);
			if (account) {
				token.accessToken = account.access_token;
				token.myToken = user.authToken;
			} else if (user) {
				token.myToken = user.authToken;
				console.log('user.authTokenn', user.authToken);
			}

			return token;
		},
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token from a provider.
			// console.log('user : ', token);
			session.myToken = token.myToken;
			session.who = user;
			session.accessToken = token.accessToken;
			console.log('xyz', session, token, user);
			return session;
		},

		async signIn({ user, account, profile }) {
			if (account.provider === 'google') {
				const res = await axios.post('/auth/googleLogin', {
					email: profile.email,
					idToken: account.id_token,
				});

				user.authToken = res.data.token;
				user.user = res.data.user;

				return true;
			} else if (account.type === 'credentials') {
				if (user.error) {
					console.log(user.error);
				} else {
					console.log('poi', user, profile, account);
					user.user = user.data.user;
					user.authToken = user.data.token;
					return true;
				}
			}
		},
	},
});
