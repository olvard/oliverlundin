//MTD
import mtd from '$lib/images/mtd/mtd.jpg'
import mtd2 from '$lib/images/mtd/mtd2.jpg'
import mtd4 from '$lib/images/mtd/fish.mp4'
import mtd5 from '$lib/images/mtd/Blad_compressed.pdf'

//Bertilchat
import bertilchat from '$lib/images/bertil/bertilchat.png'

//rumpanbar
import drinkmeny from '$lib/images/rumpanbar/drinkmeny.png'

//Beavers
import thumbnail_beaver from '$lib/images/beaver/thumbnail_beaver.jpg'

//Driving Journal
import drivingjournal from '$lib/images/drivingjournal/drivingjournal.png'
import drivingjournal2 from '$lib/images/drivingjournal/drivingjournal2.png'

//Possum
import possumtory from '$lib/images/possum/possumtory.png'

//Merit
import merit from '$lib/images/merit/merit.jpg'

export const posts = [
	{
		slug: 'bertilchat',
		title: 'BertilChat',
		image: bertilchat,
		content: 'An AI chatbot built with the OpenAi API, it allows you to chat with the local beaver in Norrköping',
		link: 'https://chatwithbertil.vercel.app'
	},
	{
		slug: 'mtd',
		title: 'Medieteknikdagen',
		// image: mtd,
		// image2: mtd2,
		// image3: mtd3,
		image4: mtd4,
		content: 'Medieteknikdagen is a career fair for students enrolled at the MT program. I was head of graphic design which meant designing many different graphics and prints.',
		link: mtd5

	},
	{
		slug: 'drinkmeny',
		title: 'Drinkmeny Koncept',
		image: drinkmeny,
		content: 'Drink menu concept for a local bar' ,
	},
	{
		slug: 'beaver',
		title: 'Beaver Posters',
		image: thumbnail_beaver,
		content: 'Why not'
	},
	{
		slug: 'drivingjournal',
		title: 'Driving Journal',
		image: drivingjournal,
		image2: drivingjournal2,
		content: 'A web-app i made to log driving distance for my father, it sends the data to a google sheet document using an API from google.'
	},
	{
		slug: 'possum',
		title: 'Possumtory',
		image: possumtory,
		content: 'Single page react to experiment with 3D on the web.',
		link: 'https://olvard.github.io/repossumtory/possumtory/build/'
	},
	{
		slug: 'merit',
		title: 'Merit WebApp',
		image: merit,
		content: 'Web-app i made with my friends for students at our program.',
		link: 'https://filipbagen.github.io/merit/'
	},


]
