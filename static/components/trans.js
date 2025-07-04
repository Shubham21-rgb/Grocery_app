export default{
    template:`
    <div class="container mt-5">
        <h1 align="center">Waiting for Confirmation</h1>
            <div class="d-flex justify-content-center align-items-center vh-80">
                <div class="alert alert-primary" role="alert" style="width: 800px; height: 150px; padding: 20px; font-size: 18px;">
                <p>Are you sure you want to place a request of amount {{amount}} and service-id{{id}}</p>
                <button class="btn btn-success" @click="save">Confirm</button>
                <router-link to="/dashboard" class="btn btn-warning">Back</router-link>
            </div>
        </div>
    </div>
        `,
                data:function(){
                    return{
                        id:null,
                        amount:null
                    }
                },
                mounted(){
                    this.cr()
                },
                methods:{
                    cr(){
                        this.id = this.$route.params.id,
                        this.amount= this.$route.params.amount
                    },

                    save(){
                        const data12={
                            id : this.$route.params.id,
                            amount: this.$route.params.amount,
                            service_name: this.$route.params.service_name
                        };
                        fetch(`/api/create/${this.$route.params.id}`,{
                            method:'POST',
                            headers: {
                                "Content-Type":'application/json',
                                "Authentication-Token":localStorage.getItem("auth_token")
                            },
                            body:JSON.stringify(data12)
                    }).then(response => response.json())
                    .then(data =>{
                            console.log(data);
                            alert("Succesfull placed");
                            this.$router.push('/dashboard');
                    }
                    )}  
                    }
                }