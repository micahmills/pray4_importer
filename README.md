# Pray4 xml from CSV

## How to use

Put the CSV file in _data folder and name it prayerrequest.csv.

Run the following command:

```npm run parseCSV```

That will give you a prayerrequests.json file in the _data folder.

You will want to update the template.html and/or xml.html file to match the format you want. I suggest creating a post in the Wordpress editor and copying the source code from the post into the template.html file or exporting the post as an xml file and copying the source code into the xml.html file. You will then need to update files to get the correct data from the json file.

Now you can run ```npm run build``` to build the files.

```_site/olympicsimport.xml``` will be the file you want to import into Pray4. If you prefer to copy and past the code into the wordpress editor (if the importer isn't working for some reason), you can find each days prayer request in the _site/DailyPrayer folder. Open each days folder and the index.html file inside and copy it into the Wordpress Editor, you may need to turn on "Code Editor" to paste the code in.