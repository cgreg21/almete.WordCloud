(function() {

	new Vue({
		el: '#App',

		data: function() {
			return {
				form: {
					words: {
						value: '',
					},

					fontFamily: (function() {
						var values = [
							'Abril Fatface',
							'Annie Use Your Telescope',
							'Anton',
							'Bahiana',
							'Baloo Bhaijaan',
							'Barrio',
							'Finger Paint',
							'Fredericka the Great',
							'Gloria Hallelujah',
							'Indie Flower',
							'Life Savers',
							'Londrina Sketch',
							'Lora',
							'Love Ya Like A Sister',
							'Merienda',
							'Nothing You Could Do',
							'Pacifico',
							'Quicksand',
							'Righteous',
							'Sacramento',
							'Shadows Into Light',
						];
						return {
							values: values,
							value: chance.pickone(values),
						};
					})(),

					rotation: (function() {
						var values = [
							function() {
								return 0;
							},
							function() {
								return 7/8;
							},
							function() {
								return chance.pickone([0, 3/4]);
							},
							function() {
								return chance.pickone([0, 1/8, 3/4, 7/8]);
							},
							function() {
								return Math.random();
							},
						];
						return {
							values: values,
							value: chance.pickone(values),
						};
					})(),

					spacing: {
						values: [0, 1/4, 1/2, 1, 2],
						valueIndex: 0,
					},

					fontSizeRatio: {
						values: [0, 1, 2, 4, 8, 16],
						valueIndex: 0,
					},
				},

				canvasWidth: 0,
				canvasHeight: 0,

				drawer: true,
			};
		},

		computed: {
			words: function() {
				var formRotationValue = this.form.rotation.value;
				var formWordsValue = this.form.words.value;

				return formWordsValue
					.split(/[\r\n]+/)
					.map(function(line) {
						return /^(.+)\s+(-?\d+)$/.exec(line);
					})
					.filter(function(matched) {
						return matched;
					})
					.map(function(matched) {
						return {
							text: matched[1],
							weight: Number.parseInt(matched[2]),
							rotation: formRotationValue(),
						};
					});
			},

			fontFamily: function() {
				return this.form.fontFamily.value;
			},

			spacing: function() {
				var values = this.form.spacing.values;
				var valueIndex = this.form.spacing.valueIndex;

				return values[valueIndex];
			},

			fontSizeRatio: function() {
				var values = this.form.fontSizeRatio.values;
				var valueIndex = this.form.fontSizeRatio.valueIndex;

				return values[valueIndex];
			},

			drawWordCloud: function() {
				var outerToken;
				return function(canvas, canvasWidth, canvasHeight, words, fontFamily, spacing, fontSizeRatio) {
					var innerToken = outerToken = {};
					return Promise.resolve()
						.then(function() {
							return (new FontFaceObserver(fontFamily)).load()
								.catch(function() {})
								.then(function() {
									if (innerToken === outerToken) {
										var ctx = canvas.getContext('2d');
										ctx.clearRect(0, 0, canvas.width, canvas.height);
										var boundedWords = almete.WordCloud(words, canvasWidth, canvasHeight, {
											rotationUnit: 'turn',
											fontFamily: fontFamily,
											spacing: spacing,
											fontSizeRatio: fontSizeRatio,
										});
										canvas.width = canvasWidth;
										canvas.height = canvasHeight;
										boundedWords.forEach(function(cloudWord) {
											ctx.save();
											ctx.translate(cloudWord.left, cloudWord.top);
											ctx.rotate(cloudWord.rotationRad);
											ctx.font = cloudWord.font;
											ctx.textAlign = 'center';
											ctx.textBaseline = 'middle';
											ctx.fillStyle = 'Grey';
											ctx.fillText(cloudWord.text, 0, 0);
											ctx.restore();
										});
									}
								});
						});
				};
			},

			drawWordCloudTrigger: function() {
				var canvas = this.$refs.canvas;

				var canvasWidth = this.canvasWidth;
				var canvasHeight = this.canvasHeight;
				var words = this.words;
				var fontFamily = this.fontFamily;
				var spacing = this.spacing;
				var fontSizeRatio = this.fontSizeRatio;

				if (canvas) {
					return setTimeout(function() {
						return this.drawWordCloud(canvas, canvasWidth, canvasHeight, words, fontFamily, spacing, fontSizeRatio);
					}.bind(this), 1000);
				}
			},
		},

		watch: {
			drawWordCloudTrigger: function(newTimeoutId, oldTimeoutId) {
				clearTimeout(oldTimeoutId);
			},
		},

		created: function() {
			this.generateFormWordsValue();
		},

		methods: {
			generateFormWordsValue: function() {
				this.form.words.value = [
					[9, 1, 3],
					[4, 5, 15],
					[2, 5, 15],
					[1, 25, 150],
				]
					.reduce(function(returns, item) {
						var weight = item[0];
						var minCount = item[1];
						var maxCount = item[2];
						var count = chance.integer({min: minCount, max: maxCount});
						var words = chance.n(chance.word, count);
						words.forEach(function(word) {
							returns.push(word + ' ' + weight);
						});
						return returns;
					}, [])
					.join('\n');
			},

			onCanvasContainerResize: function(size) {
				this.canvasWidth = size.width;
				this.canvasHeight = size.height;
			},
		},
	});

})();
