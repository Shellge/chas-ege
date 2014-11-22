/** @namespace NApi.util
 * Утилитароё
 */
NApi.util = {
	/** @namespace NApi.util._
	 * Функционал, используемый только внутри модуля NApi.util
	 * @private
	 */
	_ : {},


	/** @function NApi.util.round
	 * Округление числа
	 * @param {Number} num округляемое число
	 * @param {Number} dec_places точность округления
	 * @return число num округлённое до dp
	 */
	round : function(num, dec_places) {
		return Math.round(num / dec_places) * dec_places;
	},


	/** @function NApi.util.randomize
	 * Генерация случайного числа
	 * @param {Number} min минимальное значение
	 * @param {Number} max минимальное значение
	 * @param {Number} dec_places кол-во знаков после запятой
	 * @return случайное число
	 */
	randomize : function(min, max, dec_places) {
		return NApi.util.round(Math.random() * (max - min), (dec_places || 1));
	}
}
