//MTD
import mtd from '$lib/images/mtd/mtd.jpg'
import mtd2 from '$lib/images/mtd/mtd2.jpg'
import mtd3 from '$lib/images/mtd/mtd3.jpg'
import mtd4 from '$lib/images/mtd/mtd4.jpg'

//Bertilchat
import bertilchat from '$lib/images/bertilchat.png'

//rumpanbar
import drinkmeny from '$lib/images/rumpanbar/drinkmeny.png'
import designpdf from '$lib/images/rumpanbar/design.pdf'

//Beavers
import thumbnail_beaver from '$lib/images/beaver/thumbnail_beaver.jpg'
import beaver1 from '$lib/images/beaver/beaver1.png'
import beaver2 from '$lib/images/beaver/beaver2.png'
import beaver3 from '$lib/images/beaver/beaver3.png'

//Driving Journal
import drivingjournal from '$lib/images/drivingjournal/drivingjournal.png'
import drivingjournal2 from '$lib/images/drivingjournal/drivingjournal2.png'

//Possum
import possumtory from '$lib/images/possumtory.png'

//Merit
import merit from '$lib/images/merit.jpg'

export const posts = [
	{
		slug: 'mtd',
		title: 'Medieteknikdagen',
		image: mtd,
		image2: mtd2,
		image3: mtd3,
		image4: mtd4,
		content: 'Medieteknikdagen is a career fair for students enrolled at the MT program. For this year i was head of graphic design which meant designing many different graphics and prints, here are some examples.'

	},
	{
		slug: 'drinkmeny',
		title: 'Drinkmeny Koncept',
		image: drinkmeny,
		content: 'Drink menu concept for a local bar' ,

	},
	{
		slug: 'bertilchat',
		title: 'BertilChat',
		image: bertilchat,
		content: 'An AI chatbot built with the OpenAi API, it allows you to chat with the local beaver in Norrköping',
		link: 'https://chatwithbertil.vercel.app'
	},
	{
		slug: 'beaver',
		title: 'Beaver Posters',
		image: thumbnail_beaver,
		image2: beaver1,
		image3: beaver2,
		image4: beaver3,
		content: 'Why not'
	},
	{
		slug: 'drivingjournal',
		title: 'Driving Journal',
		image: drivingjournal,
		image2: drivingjournal,
		image3: drivingjournal2,
		content: 'A web-app i made to log driving distance for my father, it sends the data to a google sheet document using an API from google.'
	},
	{
		slug: 'possum',
		title: 'Possumtory',
		image: possumtory,
		content: 'Single page react project with threejs to for 3D'
	},
	{
		slug: 'merit',
		title: 'Merit WebApp',
		image: merit,
		content: 'Web-app i made with my friends for students at our program.'
	},


]
