
# HV19.H1 Hidden One

https://academy.hacking-lab.com/events/6/challenges/50

In [HV19.06 bacon and eggs](../06/) there is an unused hint (the data table at the bottom which can be copied):

```
Born: January 22	     	 	   	   	 	       	     	  	  
Died: April 9   	  	 	    	  	      	   		  	  
Mother: Lady Anne   		 	   	   	      	  	      	  
Father: Sir Nicholas	 	      		    	    	  	  	      	      
Secrets: unknown      	 	  	 	    	    	   	       	  
```

Looking in detail at the data the many whitespaces at the end of each line attract attention.

Googling for whitespace cipher brings up the following tool available for Ubuntu

    stegsnow - whitespace steganography program


Starting up my Ubuntu VM I can decode the message using the command below:

    stegsnow -C hidden.txt

Result

    HV19{1stHiddenFound}