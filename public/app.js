

	function something() 
	{
		var x = window.localStorage.getItem('bbb'); // x = hh['bbb']

		x = x * 1 + 1; //string to integer x = x + 1

		window.localStorage.setItem('bbb', x); // hh['bbb'] = x

		alert(x);
	}

	function add_to_cart(id) 
	{
		var key = 'product_' + id;
		
		var x = window.localStorage.getItem(key);
		x = x * 1 + 1;
		window.localStorage.setItem(key, x);

		update_orders_input();
		update_orders_button();
 	}

	function cart_get_numb_of_items() {

		var cnt = 0;
		for (var i = 0; i < window.localStorage.length; i++) 
			{
				var key = window.localStorage.key(i); //getting key
				var value = window.localStorage.getItem(key); //getting value ruby way: hh[key] = x

				if (key.indexOf('product_') == 0)
				{
					cnt = cnt + value * 1;
				}
			}

			return cnt;
	}

	function update_orders_input() 
	{
		var orders = cart_get_orders();
		$('#orders_input').val(orders);
	}

		function update_orders_button() 
	{
		var text = 'Cart (' + cart_get_numb_of_items() + ')';
		$('#orders_button').val(text);
	}

	function cart_get_orders() {

		var orders = '';
		for (var i = 0; i < window.localStorage.length; i++) 
			{
				var key = window.localStorage.key(i); //getting key
				var value = window.localStorage.getItem(key); //getting value ruby way: hh[key] = x

				if (key.indexOf('product_') == 0)
				{
					orders = orders + key + '=' + value +',';
				}
			}

			return orders;
	}
