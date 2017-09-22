#Initial card set (simple text only)
Card.destroy_all

Card.create(frontText:'Front of card 1', 
						backText:'Back Text', 
						backType: 'Text')

Card.create(frontText:'Front of card 2',
						backText:'',
						backType:'Image',
						image: File.new(Rails.root + "app/assets/images/magic.gif"))

Card.create(frontText:'Front of card 3', 
						backText:'Lorem ipsum dolor sit amet, his no eripuit offendit, his te ridens qualisque. Vel et atqui maiorum erroribus, ea omittantur comprehensam vis. Pro nulla iriure timeam in, te sea oblique prodesset, eu case equidem consequuntur pri. Mel dicta vivendo ne. Dicam congue sadipscing ad eam, dico facer doctus ut usu, eu cum numquam eligendi sapientem. Invidunt scribentur usu eu, sit dicat efficiantur comprehensam ad.\nError vituperata ut eos. Te minim mundi convenire vix, mel ignota graeci adipisci in, nec no delenit efficiendi. Ad errem aperiam vituperatoribus vel, ius affert omnesque no. Ex sit augue scripserit.\nEssent voluptaria scripserit cu sit. Aeterno euismod vel et, at est veri voluptaria, an duo viderer dolorem. Modus omnes graecis ius an, dolore equidem feugait ea per. At ignota intellegat constituto est, mel ex sale solet legere.', 
						backType: 'Dsc')
