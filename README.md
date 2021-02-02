# chaining-promises---getCountryData

Overview:
I worked on restCountries API.
I chained 3 promises together.

I want to find the data of Portugal.
From Portugal's data i take the 1st neighbouring country of Portugal (Spain).
I fetch data of Spain.
From Spain's data i take the 1st neighbouring country of Spain (Andorra).
I fetch data of Andorra.
From Andorra's data i take the 1st neighbouring country of Andorra (France).

Result
I display resulting country(France) information:
name, capital population and  image of the flag.
(output included in folder)
===

Error handling:
in case the user searches for a country that does not exist eg "Pkkjgkjdd", i create a new Error and throw the message.something went wrong! (output included in folder)

