import Array_sortBy from './helpers/Array/sortBy';

import getPopulatedWords from './members/getPopulatedWords';
import getWordsFontSizes from './members/getWordsFontSizes';
import getWordMeasures from './members/getWordMeasures';
import scaleCloudWords from './members/scaleCloudWords';
import shiftCloudWords from './members/shiftCloudWords';

export default function(words, cloudWidth, cloudHeight, {
	text = '',
	weight = 1,
	rotation = 0,
	fontFamily = 'serif',
	fontStyle = 'normal',
	fontVariant = 'normal',
	fontWeight = 'normal',
	fontSizeRatio = 0,
} = {}) {
	if (words.length > 0 && cloudWidth > 0 && cloudHeight > 0) {
		words = getPopulatedWords(
			words,
			text,
			weight,
			rotation,
			fontFamily,
			fontStyle,
			fontVariant,
			fontWeight,
		);
		words = Array_sortBy(words, ({weight}) => -weight);
		let wordsFontSizes = getWordsFontSizes(words, fontSizeRatio);
		//let cloud = createInfiniteCloud(cloudWidth / cloudHeight);
		let cloudWords = words.map(({
			text,
			weight,
			rotation,
			fontFamily,
			fontStyle,
			fontVariant,
			fontWeight,
		}, index) => {
			let fontSize = wordsFontSizes[index];
			/*let [image, imageWidth, imageHeight] = getWordImage(
				text,
				fontStyle,
				fontVariant,
				fontWeight,
				fontSize,
				fontFamily,
				rotation,
			);
			let [left, top] = cloud.placeWordImage(image, imageWidth, imageHeight);*/
			let [textWidth, textHeight, rectWidth, rectHeight] = getWordMeasures(
				text,
				fontStyle,
				fontVariant,
				fontWeight,
				fontSize,
				fontFamily,
				rotation,
			);
			return {
				text,
				rotation,
				fontStyle,
				fontVariant,
				fontWeight,
				fontSize,
				fontFamily,
				textWidth,
				rectWidth,
				rectHeight,
				rectLeft: -rectWidth / 2,
				rectTop: -rectHeight / 2,
			};
		});
		scaleCloudWords(cloudWords, cloudWidth, cloudHeight);
		shiftCloudWords(cloudWords, cloudWidth, cloudHeight);
		return cloudWords;
	}
	return [];
}
