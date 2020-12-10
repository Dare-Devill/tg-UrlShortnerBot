const TeleBot = require('telebot');
const config = require('../config');
const bot = new TeleBot(config.botToken);

const start = (msg) => {
	const replyMarkup = bot.inlineKeyboard([
		[bot.inlineButton('Developer', { url: 'https://telegram.me/Pratham_vai' })],
		[bot.inlineButton('Support Chat', { url: 'https://t.me/TheSecretHacker' })],
	]);
	bot.sendMessage(
		msg.chat.id,
		`<b>Hi ${msg.chat.first_name}, I Can Short And Bypass Yout Links.</b>\n-/help For More Info\n<code>Bot Developer : </code>@iCodeLife`,
		{ parseMode: 'html' }
	);
};

module.exports = start;
