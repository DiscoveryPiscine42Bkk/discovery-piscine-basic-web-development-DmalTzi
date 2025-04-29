if [ -z $1 ]
then
    echo "No arguments supplied"
    exit
fi

for i in $1 $2 $3
do
    if [ -n i ]
    then
        echo $i
    fi
done
