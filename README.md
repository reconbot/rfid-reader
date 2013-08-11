## Read data off the Paralax RFID Card Reader Serial with Nodejs.

This takes data from the paralax rfid reader using a ttl cable, reading 6 bits at a time.

![Paralax RFID Card Reader Serial](https://raw.github.com/reconbot/rfid-reader/master/28140-M.jpg)
![Paralax RFID Card Reader Demo](https://raw.github.com/reconbot/rfid-reader/master/paralax-rfid-reader.jpg)

 - A product page that I couldn't find more usless http://www.parallax.com/tabid/768/ProductID/114/Default.aspx (it does have some tech specs - like this reads "125 kHz Tags, EM41000 Family")
 - Good notes on serial cables http://www.zytrax.com/tech/layer_1/cables/heavy.htm
 - Really bad forum post docs from paralax http://forums.parallax.com/showthread.php/93137-RS-232-(PC)-Interfaces-for-Parallax-Inc.-Serial-Accessories?p=640523&viewfull=1#post640523
 - An even worse vb 2005 program to read off the device http://forums.parallax.com/showthread.php/103732-RFID-Reader-Software-(VB.NET)
 - The Adafruit USB FTDI TTL cable http://www.adafruit.com/products/70#Description and tech specs http://www.adafruit.com/datasheets/DS_TTL-232R_CABLES_V201.pdf

# todo
 - [ ] Use some sort of time based reset of data - sometimes the reader doesn't output all of the bytes
 - [ ] ignore duplicate reads in a threshold of time
 - [ ] actually be a requirable library instead of a script that console logs
 - [ ] Build instructions

# notes
Since I probably wont get to the todo's I'll leave some notes.
 - It's 1200 baud
 - Enable should be brought to ground - the red light means it's reading
 - SOUT goes to the TTL cable's RXD (yellow) pin
 - It's fun to play with
 - The cards have 6 byte ids probably
