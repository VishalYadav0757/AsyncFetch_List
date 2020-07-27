import React,{Component} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            page:1,
            isLoading:false
        };
    };
    componentDidMount(){
        this.setState({isLoading:true}, this.getData);
    };
    getData = () => {
        const url= "https://api.randomuser.me/?seed=1&results=10&page="+this.state.page
        fetch (url).then((res)=>res.json())
        .then((resJson)=>{
            this.setState({
                data:this.state.data.concat(resJson.results)
            });
        });
    };    
        Data=({item})=>{
        return(
            <View style={styles.item}>
                <Text style={styles.itemText}> FirstName = {item.name.first}</Text>
                <Text style={styles.itemText}> LastName = {item.name.last}</Text>
                <Text style={styles.itemText}> Gender = {item.gender}</Text>
                <Text style={styles.itemText}> StreetName = {item.location.street.number}</Text>
                <Text style={styles.itemText}> StreetNumber = {item.location.street.name}</Text>
                <Text style={styles.itemText}> City = {item.location.city}</Text>
                <Text style={styles.itemText}> State = {item.location.state}</Text>
                <Text style={styles.itemText}> Country = {item.location.country}</Text>
                <Text style={styles.itemText}> Postcode = {item.location.postcode}</Text>
                <Text style={styles.itemText}> Email = {item.email}</Text>
                <Text style={styles.itemText}> UUID = {item.login.uuid}</Text>
                <Text style={styles.itemText}> Username = {item.login.username}</Text>
                <Text style={styles.itemText}> Password = {item.login.password}</Text>
                <Text style={styles.itemText}> Salt = {item.login.salt}</Text>
                <Text style={styles.itemText}> MD5 = {item.login.md5}</Text>
                <Text style={styles.itemText}> SHA1 = {item.login.sha1}</Text>
                <Text style={styles.itemText}> SHA256 = {item.login.sha256}</Text>
                <Text style={styles.itemText}> D.O.B = {item.dob.date}</Text>
                <Text style={styles.itemText}> Age = {item.dob.age}</Text>
                <Text style={styles.itemText}> Registered Date = {item.registered.date}</Text>
                <Text style={styles.itemText}> Registered Age = {item.registered.age}</Text>
                <Text style={styles.itemText}> Phone = {item.phone}</Text>
                <Text style={styles.itemText}> Cell = {item.cell}</Text>
                <Text style={styles.itemText}> Id Name = {item.id.name}</Text>
                <Text style={styles.itemText}> Id Value = {item.id.value}</Text>
                <Text style={styles.itemText}> Nat = {item.nat}</Text>
            </View>
        );
    };
    handleLoadMore=()=>{
        this.setState(
            {page:this.state.page+1, isLoading:true},
            this.getData
        );
    };
    render(){
        return(
            <FlatList
                style={StyleSheet.container}
                data={this.state.data}
                renderItem={this.Data}
                keyExtractor={(item,index)=>index.toString()}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={0}
            />    
        ); 
    };  
};

const styles=StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'#F5FCFF'
    },
    item:{
        backgroundColor: '#EF9A9A',
        marginBottom:10,
        padding: 5
    },
    itemText:{
        fontSize:15,
        padding:5
    }
});