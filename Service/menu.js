function draw_table()
{
	$("#menu-item").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#menu-item").append(html);	
				calculation();			
			}
		});
	};
	$.getJSONuncached("/menu/html")
};

function calculation() {
	$("input").change(function(){
		var allSum = drinksSum = sideDishesSum = breakfastSum = lunchSum = dinnerSum = 0;
        
		drinksSum = getSumBySelector('#menu-item input.Drinks');
        sideDishesSum = getSumBySelector('#menu-item input.SideDishes');		
        breakfastSum = getSumBySelector('#menu-item input.Breakfast');
        lunchSum = getSumBySelector('#menu-item input.Lunch');
		dinnerSum = getSumBySelector('#menu-item input.Dinner');
		allSum = getSumBySelector('#menu-item input');
        
		document.getElementById('drinks-bill').innerHTML='€ ' + drinksSum.toFixed(2);
		document.getElementById('side-dishes-bill').innerHTML='€ ' + sideDishesSum.toFixed(2);
		document.getElementById('breakfast-bill').innerHTML='€ ' + breakfastSum.toFixed(2);
		document.getElementById('lunch-bill').innerHTML='€ ' + lunchSum.toFixed(2);
		document.getElementById('dinner-bill').innerHTML='€ ' + dinnerSum.toFixed(2);

		document.getElementById('total-bill').innerHTML='€ ' + allSum.toFixed(2);
	});
}

function getSumBySelector(selector) {
    result = [...document.querySelectorAll(selector)]
    .map(e => { return {quantity : e.value, cost: e.getAttribute('aria-cost')}})
    .reduce((prev, curr) => {
        if (typeof prev === 'number') {
			value = prev + parseFloat(curr.cost * curr.quantity);    
			return value;    	    
        }
		value = parseFloat(prev.cost * prev.quantity) + parseFloat(curr.cost * curr.quantity);
		return value;
    });

	if (typeof result === 'number') {
		return result;
	} else {
		return parseFloat(result.cost * result.quantity);
	}
}

$(document).ready(function ()
{
	draw_table();		
});