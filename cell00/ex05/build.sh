filenames=$@
if [ $# -eq 0 ]
then
    echo "No arguments supplied"
    exit
fi
for filename in $filenames
do
    mkdir "ex$filename"
done
