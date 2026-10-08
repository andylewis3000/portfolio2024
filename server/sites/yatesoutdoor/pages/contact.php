<div id="contact">
	
	<div class="inner-intro">
		<div class="bluefill"></div>
		<div class="heading">	
			<h1>Contact</h1>
		</div>
	</div>
	
	<div class="contact">
		<div class="window">
			<div class="container">
				<div class="left">
					<!-- Archived site: form submission disabled -->
					<form action="#" method="post" name='form' onsubmit="return false;">
						<div class="box left">
							<label class="label">Name *</label>
							<input class="input" name="name" type="text" placeholder="John Smith" tabindex="1">
						
							<label class="label">Email *</label>
							<input class="input" name="email" type="email" placeholder="example@example.com" tabindex="2">
							
							<label class="label">Phone</label>
							<input class="input" name="phone" type="tel" placeholder="555-555-5555" tabindex="3">
						</div>
						
						<div class="box right">
							<label class="label">Company</label>
							<input class="half" name="company" type="text" placeholder="Company X" tabindex="4">
							
							<label class="label">Message *</label>
							<textarea class="message" name="message" type="text" placeholder="Type your request..." tabindex="5"></textarea>
						</div>
						
						<div class="clear"></div>
						
						<input class="submit anim" name="submit" type="submit" value="Submit" tabindex="6" disabled aria-disabled="true">
					</form>	
					
					<?php
						// Archived site: form handler disabled (never sends mail).
						// include 'pages/contact/submit.php';
					?>
					
				</div>
				
				<div class="right">
					<div class="contact-methods">
						<div class="method anim">
							<i class="fa fa-2x fa-phone"></i><a aria-disabled="true">1 905 483 4166</a>
						</div>
						<div class="method anim">
							<i class="fa fa-2x fa-envelope"></i><a aria-disabled="true">info@yatesoutdoor.com</a>
						</div>
					</div>
					
					<div class="brands">
<!-- 						<a href="http://www.marmot.com/" target="_blank"><img src="<?=$full_url?>images/footer-marmot-logo.png" alt="Marmot" /></a> -->
						<a href="https://www.kumaoutdoorgear.com/" target="_blank"><img src="<?=$full_url?>images/footer-kuma-logo.png" alt="Kuma Outdoor Gear" /></a>
						<a href="https://www.gsioutdoors.com/" target="_blank"><img src="<?=$full_url?>images/footer-gsi-logo.png" alt="GSI Outdoors" /></a>
						<a href="https://www.coghlans.com/" target="_blank"><img src="<?=$full_url?>images/footer-coghlans-logo.png" alt="Coghlans" /></a>
<!--
						<a href="https://www.craftsportswear.com/" target="_blank"><img src="<?=$full_url?>images/footer-craft-logo.png" alt="Craft Sportswear" /></a>
						<a href="https://www.matadorup.com/" target="_blank"><img src="<?=$full_url?>images/footer-matador-logo.png" alt="Matador" /></a>
						<a href="https://www.lifestraw.com/" target="_blank"><img src="<?=$full_url?>images/footer-lifestraw-logo.png" alt="Lifestraw" /></a>
						<a href="https://www.drysure.co/" target="_blank"><img src="<?=$full_url?>images/footer-drysure-logo.png" alt="Drysure" /></a>
-->
					</div>
				</div>
				
			</div>

			<div class="clear"></div>

		</div>
	</div>
	
</div>