//MTD
import mtd from '$lib/images/mtd/mtd.jpg'
import mtd2 from '$lib/images/mtd/mtd2.jpg'
import mtd3 from '$lib/images/mtd/mtd3.jpg'

//Beavers
import thumbnail_beaver from '$lib/images/beaver/thumbnail_beaver.jpg'
import beaver1 from '$lib/images/beaver/beaver1.png'
import beaver2 from '$lib/images/beaver/beaver2.png'
import beaver3 from '$lib/images/beaver/beaver3.png'

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
		image3:mtd3,

	},

	{
		slug: 'beaver',
		title: 'Beaver Posters',
		image: thumbnail_beaver,
		image2: beaver1,
		image3: beaver2,
		image4: beaver3,
	},

	{
		slug: 'possum',
		title: 'Possumtory',
		image: possumtory,
	},
	{
		slug: 'merit',
		title: 'Merit WebApp',
		image: merit,
	},


]
