all: save open

save:
	pug index.pug
	sass sass-styles/styles.sass > styles.css

open:
	google-chrome index.html
